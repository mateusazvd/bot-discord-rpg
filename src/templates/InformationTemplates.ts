import { EmbedBuilder } from "discord.js";

export function InformationEmbed(title: string, description: string, urlImg: string) {
    const InformationEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(title)
        .setURL('https://discord.js.org/')
        .setDescription(description)
        .setThumbnail(urlImg)
        .setImage(urlImg)

    return InformationEmbed
}


// const exampleEmbed = new EmbedBuilder()
//             .setColor(0x0099FF)
//             .setTitle('Some title')
//             .setURL('https://discord.js.org/')
//             .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
//             .setDescription('Some description here')
//             .setThumbnail('https://i.imgur.com/AfFp7pu.png')
//             .addFields(
//                 { name: 'Regular field title', value: 'Some value here' },
//                 { name: '\u200B', value: '\u200B' },
//                 { name: 'Inline field title', value: 'Some value here', inline: true },
//                 { name: 'Inline field title', value: 'Some value here', inline: true },
//             )
//             .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
//             .setImage('https://i.imgur.com/AfFp7pu.png')
//             .setTimestamp()
//             .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });