import mongoose from "mongoose";

// stape 1 : Connect to mongodb server
try {
  mongoose.connect(
    "mongodb+srv://info2programmer:lYHYimLLM4kTDhvl@cluster0.l5kk1.mongodb.net/monggose_database"
  );
  mongoose.set("debug", true);
} catch (err) {
  console.log(err);
  process.exit();
}

// Step 2: Define a schema
const userSchema = mongoose.Schema({
  //   name: String,
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 5 },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now() },
});

// Step : Crate a model
const Users = mongoose.model("user", userSchema);

await Users.create({
  name: "Saikat",
  age: 30,
  email: "info2programmer@gmail.com",
});

await Users.createIndexes();
await mongoose.connection.close();
