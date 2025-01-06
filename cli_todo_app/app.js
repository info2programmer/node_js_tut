import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log(chalk.bgGreenBright("\n1: Add a task "));
  console.log(chalk.bgBlueBright("2: Show task "));
  console.log(chalk.bgRedBright("3: Exit "));

  rl.question("Please select your option: ", handelOptionSelect);
};

const handelOptionSelect = (option) => {
  if (option === "1") {
    rl.question(chalk.bgMagenta("Please enter your Task: "), (task) => {
      todos.push(task);
      console.log(chalk.bgGreen.italic.bold("Task added!!"));
      showMenu();
    });
    //
  } else if (option === "2") {
    if (todos.length > 0) {
      todos.map((item, index) => {
        console.log(chalk.bgYellowBright(`Task ${index + 1} : ${item}`));
      });
    } else {
      console.log(chalk.bgRedBright("Sorry!! no list found"));
    }
    showMenu();
  } else if (option === "3") {
    console.log(chalk.cyanBright("Thanks :}"));
    rl.close();
  } else {
    console.log(chalk.bgRedBright("Invalid input"));
    showMenu();
  }
};

showMenu();
