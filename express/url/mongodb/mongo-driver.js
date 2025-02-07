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

//! Create
// url_connection.insertMany([
//   {
//     name: "Saikat",
//     age: 30,
//     city: "Kolkata",
//   },
//   {
//     name: "Neha",
//     age: 30,
//     city: "Bhubaneswar",
//   },
//   {
//     name: "Gopal Paul",
//     age: 35,
//     city: "Mangalgunj",
//   },
// ]);

//! Read
// const userCursor = url_connection.find();

// for await (const user of userCursor) {
//   console.log(user);
// }

// const userCursor = await url_connection.find().toArray();
// console.log(userCursor);
//? Where Condition

// const user = await url_connection.findOne({ age: 30 });
//  console.log(user);
// console.log(user.name);
// console.log(user._id.toHexString());

//! Update

// await url_connection.updateOne(
//   { name: "Neha" },
//   { $set: { name: "Neha Ray Chaudhury" } }
// );

// await url_connection.updateMany({}, { $set: { role: "admin" } });

// ! Delete
// const result = await url_connection.deleteOne({ age: 35 });
// console.log(`${result.deletedCount} Document deleted`);
// await url_connection.deleteMany({ role: "admin" });
