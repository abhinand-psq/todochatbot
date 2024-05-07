

import { MongoClient,ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://abhinandpsq2:abhinand@cluster0.onsrcfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri);



async function run() {
  try {
    await client.connect();
    console.log('woeking');
  } catch(e) {
    throw new Error(e)
  }
}


export { run as mongoconnection ,client as connect}
