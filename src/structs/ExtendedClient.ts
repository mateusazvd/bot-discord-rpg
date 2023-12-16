import {
  Client,
  IntentsBitField,
  BitFieldResolvable,
  GatewayIntentsString,
  Partials,
} from "discord.js";

import dotenv from "dotenv";
dotenv.config();

export class ExtendedClient extends Client {
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
    this.login(process.env.BOT_TOKEN);
  }
}
