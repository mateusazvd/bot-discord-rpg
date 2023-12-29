import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js"
import { client } from "../.."
import { Event } from "../../structs/types/Event"

export default new Event({
    name: "interactionCreate",
    run(interaction) {
        if (interaction.isModalSubmit()) client.modal.get(interaction.customId)?.(interaction)
        if (interaction.isButton()) client.buttons.get(interaction.customId)?.(interaction)
        if (interaction.isStringSelectMenu()) client.selects.get(interaction.customId)?.(interaction)




    }
})