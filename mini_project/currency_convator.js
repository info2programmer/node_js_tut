import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "769b4a90b0d3b3b050b964cf";
const url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    // console.log(JSON.parse(data).conversion_rates);
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Please enter amount in USD: ", (amount) => {
      rl.question(
        "Enter the target currency (ex. INR, EUR, NPR): ",
        (currency) => {
          const rate = rates[currency.toUpperCase()];
          if (rate) {
            console.log(
              chalk.bgCyanBright(
                `${amount} USD is approximately ${rate * amount} ${currency} `
              )
            );
          } else {
            console.log(
              chalk.bgRedBright(`Please enter currency format correctly. `)
            );
          }
          rl.close();
        }
      );
    });
  });

  res.on("error", () => {
    console.log("Some error occured");
  });
});
