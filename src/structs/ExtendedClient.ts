import {
  Client,
  IntentsBitField,
  BitFieldResolvable,
  GatewayIntentsString,
  Partials,
  Collection,
  ApplicationCommandDataResolvable,
  ClientEvents,
} from "discord.js";
import path from "path"
import fs from "fs"
import dotenv from "dotenv";
import { CommandType, componentsButton, componentsModal, componentsSelect } from "./types/command";
import { EventType } from "./types/Event";
dotenv.config();

const fileCondition = (filename: string) => filename.endsWith(".js") || filename.endsWith(".ts")


export class ExtendedClient extends Client {

  public commands: Collection<string, CommandType> = new Collection();
  public buttons: componentsButton = new Collection()
  public selects: componentsSelect = new Collection()
  public modal: componentsModal = new Collection()

  constructor() {
    // adicionando todos os intents (permissões ao app)
    super({
      intents: Object.keys(IntentsBitField.Flags) as BitFieldResolvable<
        GatewayIntentsString,
        number
      >,
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.GuildScheduledEvent,
        Partials.Message,
        Partials.Reaction,
        Partials.ThreadMember,
        Partials.User,
      ],
    });
  }

  // função que inicia o servidor
  public start() {
    this.registerModules()
    this.registerEvents()
    this.login(process.env.BOT_TOKEN);
  }

  private registerCommands(command: Array<ApplicationCommandDataResolvable>) {
    this.application?.commands.set(command)
      .then(() => {
        console.log("Slash commands defined".bgCyan);
      })
      .catch(error => {
        console.log(`An error occurred while trying to set the slash commands ${error}`.red)
      }
      )
  }

  private registerModules() {
    const slashCommands: Array<ApplicationCommandDataResolvable> = new Array()
    const commandsPath = path.join(__dirname, "..", "commands")

    fs.readdirSync(commandsPath).forEach(local => {
      fs.readdirSync(commandsPath + `/${local}/`).filter(fileCondition).forEach(async filename => {
        const command: CommandType = (await import(`../commands/${local}/${filename}`))?.default
        const { name, buttons, selects, modals } = command
        if (name) {
          this.commands.set(name, command)
          slashCommands.push(command)
          if (buttons) buttons.forEach((run, key) => this.buttons.set(key, run))
          if (selects) selects.forEach((run, key) => this.selects.set(key, run))
          if (modals) modals.forEach((run, key) => this.modal.set(key, run))

        }
      })

    })

    this.on("ready", () => this.registerCommands(slashCommands))
  }

  private registerEvents() {
    const eventsPath = path.join(__dirname, "..", "events");

    fs.readdirSync(eventsPath).forEach(local => {

      fs.readdirSync(`${eventsPath}/${local}`).filter(fileCondition).forEach(async filename => {
        const { name, run, once }: EventType<keyof ClientEvents> = (await import(`../events/${local}/${filename}`)).default

        try {
          if (name) (once) ? this.once(name, run) : this.on(name, run)
        } catch (error) {
          console.log(`An error occured on event: ${name} \n ${error}`);

        }

      })

    })
  }

}
