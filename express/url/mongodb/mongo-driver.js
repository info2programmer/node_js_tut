import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://info2programmer:lYHYimLLM4kTDhvl@cluster0.l5kk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

await client.connect();

const db = client.db("url_shortner_db");
const url_connection = db.collection("urls");

url_connection.insertMany([
  {
    name: "Neha",
    age: 30,
    city: "Bhubaneswar",
  },
  {
    name: "Gopal Paul",
    age: 35,
    city: "Mangalgunj",
  },
]);
