import { ActionRowBuilder, ApplicationCommandOptionType, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/command";

export default new Command({
    name: "Mencionar",
    // description: "testa a aplicação",
    type: ApplicationCommandType.User,
    // options: [
    //     {
    //         name: "a",
    //         description: "b",
    //         type: ApplicationCommandOptionType.String,
    //         required: true
    //     }
    // ],
    async run({ interaction, options }) {

        if (!interaction.isUserContextMenuCommand()) return

        let mention = interaction.targetMember
        interaction.reply({ content: `${interaction.user} mencionou ${mention}` })

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