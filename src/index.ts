import {ExtendedClient} from "./structs/ExtendedClient"
export * from "colors"

const client = new ExtendedClient();
client.start()

export {client}

client.on("ready",()=>{
    console.log("Bot online".red);
})

client.on("messageCreate",(message)=>{
    if(message.author.id == client.user?.id) return;

    message.reply({
        content:`olá ${message.author.username}`
    })
})