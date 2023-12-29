import { ActionRowBuilder, ApplicationCommandOptionType, ApplicationCommandType, Collection, EmbedBuilder } from "discord.js";
import { Command } from "../../structs/types/command";
import { InformationEmbed } from "../../templates/InformationTemplates";
import { createInfo } from "../../db/Information";

export default new Command({
    name: "information",
    // description: "testa a aplicação",
    type: ApplicationCommandType.ChatInput,
    description: "Acessar ou adicionar informações do mundo",
    options: [
        {
            name: "create",
            description: "Criar nova carta de infomação",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "title",
                    description: "Título da carta de informação",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "content",
                    description: "Conteudo da carta de informação",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "image",
                    description: "Imagem da Informação",
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
                let title = options.getString("title") || ""
                let content = options.getString("content") || ""
                let urlImg = options.getString("image") || ""
                createInfo({ infoTitle: title, infoContent: content, infoImg: urlImg })

                console.log(title, content);

                interaction.reply({ ephemeral: true, embeds: [InformationEmbed(title, content, urlImg)] })
                break;

            default:
                break;
        }

        // if (!interaction.isUserContextMenuCommand()) return

        // let mention = interaction.targetMember
        // interaction.reply({ content: `${interaction.user} mencionou ${mention}` })

        // await interaction.deferReply({ ephemeral: true })
        // const text = options.getString("a", true)

        // await interaction.reply({ content: `olá ${text}` })
        // await interaction.followUp({ content: "ping", ephemeral: true })


        // const row = new ActionRowBuilder<ButtonBuilder>({
        //     components: [
        //         new ButtonBuilder({ customId: "test-buttom", label: "Clique aqui", style: ButtonStyle.Success })
        //     ]
        // })

        // interaction.reply({ ephemeral: true, content: "pong" })

        // setTimeout(() => {
        //     interaction.deleteReply()
        // }, 3500)
    },

    buttons: new Collection([
        ["test-buttom", async (interaction) => {
            interaction.update({ components: [] })
        }]
    ])

})