import { ActionRowBuilder, ApplicationCommandOptionType, ApplicationCommandType, Collection, EmbedBuilder } from "discord.js";
import { Command } from "../../structs/types/command";

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
                }
            ]
        }
    ],

    async run({ interaction, options }) {

        const subcommand = options.getSubcommand()

        console.log(subcommand);

        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        switch (subcommand) {
            case 'create':
                let title = options.getString("title")
                let content = options.getString("content")
                console.log(title, content);

                interaction.reply({ content: `${title} \n ${content}`, ephemeral: true, embeds: [exampleEmbed] })
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