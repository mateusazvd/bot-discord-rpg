import { ApplicationCommandData, ButtonInteraction, Collection, CommandInteraction, CommandInteractionOptionResolver, ModalSubmitInteraction, StringSelectMenuInteraction } from "discord.js";
import { ExtendedClient } from "../ExtendedClient";

export interface CommandProps {
    client: ExtendedClient,
    interaction: CommandInteraction,
    options: CommandInteractionOptionResolver
}

export type componentsButton = Collection<string, (interaction: ButtonInteraction) => any>
export type componentsSelect = Collection<string, (interaction: StringSelectMenuInteraction) => any>
export type componentsModal = Collection<string, (interaction: ModalSubmitInteraction) => any>


interface CommandComponents {
    buttons?: componentsButton,
    selects?: componentsSelect,
    modals?: componentsModal,
}

export type CommandType = ApplicationCommandData & CommandComponents & {
    run(props: CommandProps): any
}


export class Command {
    constructor(options: CommandType) {
        options.dmPermission = false // nenhum comando será realizado dentro do bot
        Object.assign(this, options)
    }

}