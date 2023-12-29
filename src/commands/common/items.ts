import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "../../structs/types/command";
import { createItem } from "../../db/Item";
import { ItemEmbed } from "../../templates/ItemTemplate";

export default new Command({
    name: "item",
    type: ApplicationCommandType.ChatInput,
    description: "Acessar ou adicionar items no catálogo",
    options: [
        {
            name: "create",
            description: "Criar um novo item",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "nome",
                    description: "Nome da carta de item",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "descrição",
                    description: "Descrição do item",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "imagem",
                    description: "Imagem do item ",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "raridade",
                    description: "Raridade do item ",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "peso",
                    description: "Peso do item ",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],

    async run({ interaction, options }) {

        const subcommand = options.getSubcommand()
        switch (subcommand) {
            case 'create':
                let name = options.getString("nome") || ""
                let content = options.getString("descrição") || ""
                let urlImg = options.getString("imagem") || ""
                let rarity = options.getString("raridade") || ""
                let weight = options.getString("peso") || ""

                createItem({ name: name, description: content, image: urlImg, rarity, weight })

                interaction.reply({ ephemeral: true, embeds: [ItemEmbed({ name: name, description: content, image: urlImg, rarity, weight })] })
                break;

            default:
                break;
        }

    },


})