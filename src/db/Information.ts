import { connect } from "./Database"



export async function createInfo(information: IInformation) {
    const db = await connect();
    return db.collection('information').insertOne(information);
}

export async function getInfo() {
    const db = await connect();
    return db.collection('information').find().toArray();
}


