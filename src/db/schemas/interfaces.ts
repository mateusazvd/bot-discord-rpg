interface Player {
    playerId: string
    name: string
}

interface Person {
    personId: string
    playerId: string
    name: string
    lifePoints: number
    charge: number
    armor: number
    magicanSlots: any[]
    displacement: number
    status: string
    strength: number
    constitution: number
    dexterity: number
    wisdom: number
    charisma: number
    intelligence: number
}

interface IInformation {
    infoTitle: string
    infoContent: string
    infoImg?: string
}

interface IItem {
    name: string
    description: string
    image: string
    rarity: string
    weight: string
}