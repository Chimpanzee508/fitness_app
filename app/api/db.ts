import { MongoClient } from "mongodb";

const uri = process.env.URI

if (!uri) {
  throw new Error("Please define the URI environment variable inside .env.local");
}

const client = new MongoClient(uri);

export default client
