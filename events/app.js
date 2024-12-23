const EventEmmeter = require("events");
// events module returen a class thats why we need to create an object of that class

const event = new EventEmmeter();

// // 1 - Register a listener
// event.on("sayMyName", () => {
//   console.log("Your name is Saikat");
// });

// // 2 - Trigger an event
// event.emit("sayMyName");

// ** Parameter passing in event
// event.on("checkPage", (sc, msg) => {
//   console.log(`status code is ${sc} and the page is ${msg}`);
// });

// // Trigger an event
// event.emit("checkPage", 200, "OK");

// ** Registering multiple events
// event.on("checkPage", (sc, msg) => {
//   console.log(`status code is ${sc} and the page is ${msg}`);
// });

// event.on("checkPage", (sc, msg) => {
//   console.log(`status code is ${sc} and the page is ${msg}`);
// });

// // Trigger an event
// event.emit("checkPage", 200, "OK");

// ** Registering Object as a parameter
event.on("checkPage", (obj) => {
  console.log(`status code is ${obj.sc} and the page is ${obj.msg}`);
});

// Trigger an event
event.emit("checkPage", { sc: 200, msg: "OK" });
