export function DiceCommands(textMessage: string) {
    let textMessageUtils = ""
    if (textMessage.startsWith("%") && textMessage.includes("d")) {


        textMessageUtils = textMessage.replace("%", "")
        let diceNumber = parseInt(textMessageUtils.split("d")[0])
        let dice = parseInt(textMessageUtils.split("d")[1])

        let limit = diceNumber < 1000 && dice < 1000

        if (limit) {
            let rollResults = `${textMessageUtils} `
            let count = 0
            for (let index = 0; index < diceNumber; index++) {
                let result = rollTheDice(dice)
                count = count + result
                rollResults = `${rollResults} [ ${result} ] `
            }

            rollResults = `${rollResults} \n Total: ${count}`

            return rollResults
        }

    }
    else {
        return ""
    }

}


function rollTheDice(max: number) {
    let random = Math.random();
    random = random * max;
    random = Math.floor(random);

    return random;
}