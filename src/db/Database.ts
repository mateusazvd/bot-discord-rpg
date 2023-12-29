const { MongoClient } = require('mongodb');

const username = "admin"
const password = "admin"

const url = `mongodb+srv://${username}:${password}@cluster0.zhsp8wq.mongodb.net/?retryWrites=true&w=majority`;
const dbName = 'kingdom';

export async function connect() {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Conectado ao MongoDB');
        return client.db(dbName);
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
}
