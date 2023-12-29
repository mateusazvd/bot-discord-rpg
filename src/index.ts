import { ExtendedClient } from "./structs/ExtendedClient"
export * from "colors"
import config from "./config.json";
import { DiceCommands } from "./utils/DicesCommands";
import { connect } from "./db/Database";

const client = new ExtendedClient();
client.start()

export { client, config }


client.on("messageCreate", async (message) => {
    const diceResponse = DiceCommands(message.content)
    if (!diceResponse) return
    message.reply({
        content: `${diceResponse}`
    })
})
