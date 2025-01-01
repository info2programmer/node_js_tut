const path = require("path");
const fs = require("fs/promises");
const events = require("events");
const moment = require("moment");

const eventEmitter = new events.EventEmitter();

// File path
const fileName = "log.txt";
const filePath = path.join(__dirname, fileName);

// *Stape 1 :  Login event
// eventEmitter.on("login", async (arg) => {
//   try {
//     await fs.writeFile(
//       filePath,
//       `${arg.username} Login at : ${moment().format(
//         "MMMM Do YYYY, h:mm:ss a"
//       )}\n`,
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log(`username: ${arg.username}, password: ${arg.password}`);
//   }
// });

// *  Call Login Event
// eventEmitter.emit("login", {
//   username: "info2programmer@gmail.com",
//   password: "admin123",
// });

// * Stape 2 : Purchase event
// eventEmitter.on("purchase", async (args) => {
//   //   console.log(args.username, args.item, args.name);
//   try {
//     await fs.appendFile(
//       filePath,
//       `${args.username} Purchase ${args.item} at : ${moment().format(
//         "MMMM Do YYYY, h:mm:ss a"
//       )}`
//     );
//     console.log(
//       `Hi, ${args.name} : Your Purchase of ${args.item} is done. Please wait for further confirmation`
//     );
//   } catch (err) {
//     console.log(err);
//   }
// });

// * Call Purchase
// eventEmitter.emit("purchase", {
//   username: "info2programmer@gmail.com",
//   item: "Apple Macbook AIR",
//   name: "Saikat Bhadury",
// });

// * Stape - 3 Profile Update

// eventEmitter.on("profile_update", async (args) => {
//   try {
//     await fs.appendFile(
//       filePath,
//       `\n${args.username} has update email at : ${moment().format(
//         "MMMM Do YYYY, h:mm:ss a"
//       )}\n`
//     );
//     console.log(`Profile Update : ${args.username}`);
//   } catch (err) {
//     console.log(err);
//   }
// });

// *  Call profile_update event
// eventEmitter.emit("profile_update", { username: "info2programmer@gmail.com" });

// *Stape 4 - Logout User
eventEmitter.on("logout", async (args) => {
  //   console.log(args);
  try {
    await fs.appendFile(
      filePath,
      `\n${args.username} has been logout :  at ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      )}`
    );
    console.log(`Logout Successfully : ${args.username}`);
  } catch (err) {
    console.log(err);
  }
});

eventEmitter.emit("logout", { username: "info2programmer@gmail.com" });

// * Stape - 5 Check Logs
eventEmitter.on("check_status", async () => {
  try {
    await fs.readFile(filePath, "utf-8").then((data) => {
      console.log(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// * Call check_status event
eventEmitter.emit("check_status");
