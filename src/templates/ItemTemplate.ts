import { EmbedBuilder } from "discord.js";

export function ItemEmbed(itemData: any) {

    const rarity = itemData.rarity
    let color: any = ""
    switch (rarity.toLowerCase()) {
        case "comum":
            color = "#fff"
            break;
        case "incomum":
            color = "#55eb34"
            break;
        case "raro":
            color = "#c45eff"
            break
        case "muito raro":
            color = "#ff0004"
            break
        case "muito raro":
            color = "#ff3700"
            break
        default:
            color = "#fff"
            break;
    }


    const ItemEmbed = new EmbedBuilder()
        .setColor(color)
        .setTitle(itemData.name)
        .setDescription(itemData.description)
        .setThumbnail(itemData.image)
        .addFields(
            { name: "Raridade", value: itemData.rarity, inline: true },
            { name: "Peso", value: itemData.weight, inline: true },
        )
        .setImage(itemData.image)

    return ItemEmbed
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