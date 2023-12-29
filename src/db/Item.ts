import { connect } from "./Database"



export async function createItem(Item: any) {
    const db = await connect();
    return db.collection('items').insertOne(Item);
}

export async function getItem() {
    const db = await connect();
    return db.collection('items').find().toArray();
}



