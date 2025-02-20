import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://vieiralucas1199:123456lll@cluster0.txhkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("SpotifyHastag");
