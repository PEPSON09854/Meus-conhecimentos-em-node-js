import { MongoClient } from "mongodb"

const uri = "mongodb://localhost:27017/db"

const client = new MongoClient(uri)

async function run(){

    try {
        await client.connect()
        console.log('Conectado ao mongodb!')
    } catch (error) {
        console.log(error)
    }
}

run()

export default client