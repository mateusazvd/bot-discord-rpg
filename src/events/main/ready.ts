import { client } from "../.."
import { Event } from "../../structs/types/Event"

export default new Event({
    name: "ready",
    once: true,
    run() {

        const { commands, buttons, selects, modal } = client
        console.log(":) bot online");
        console.log(`commands loaded: ${commands.size}`);
        console.log(`buttons loaded: ${buttons.size}`);
        console.log(`selects loaded: ${selects.size}`);
        console.log(`modals loaded: ${modal.size}`);

    }
})