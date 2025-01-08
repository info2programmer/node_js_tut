import chalk from "chalk";
import readline from "readline";
import fs from "fs/promises";
import path from "path";
const __dirname = path.resolve();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Shows a prompt to enter a file name and calls handelPrompt with the entered text
 */

const showFileNamePrompt = () => {
  //   console.log(chalk.bgCyan("Enter file name"));
  rl.question(chalk.bgCyan("Enter file name: "), handelPrompt);
};

const handelPrompt = (option) => {
  const fileName = `${option}.txt`;
  const filePath = path.join(__dirname, fileName);
  rl.question(chalk.bgCyan("Enter file content: "), async (fileContent) => {
    try {
      await fs.writeFile(filePath, fileContent, "utf-8");
      console.log(chalk.bgGreen(`\n${fileName} created successfully`));
      rl.close();
    } catch (err) {
      console.log(err);
    }
  });
};

showFileNamePrompt();
