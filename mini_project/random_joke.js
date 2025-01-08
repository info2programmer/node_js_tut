import http from "http";
import chalk from "chalk";

/**
 * Makes a GET request to the joke API and logs a random joke to the console.
 * The joke is formatted with the setup in red and the punchline in blue
 * with a red background.
 */
const getJoke = () => {
  const url = "http://www.official-joke-api.appspot.com/random_joke";

  http.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      const joke = JSON.parse(data);

      console.log(chalk.blueBright(`\nHere is some ${joke.type} joke: `));
      console.log(chalk.red(joke.setup));
      console.log(chalk.blue.bgRed.bold(joke.punchline));
    });

    res.on("error", () => {
      console.log("Some error occured");
    });
  });
};

getJoke();
