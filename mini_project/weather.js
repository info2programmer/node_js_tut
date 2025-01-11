import chalk from "chalk";
import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const API_KEY = "";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

const getWeatherData = async (city) => {
  try {
    await fetch(`${BASE_URL}&q=${city}&units=metric`).then(async (resp) => {
      if (!resp.ok) {
        throw new Error("Some error occured");
      }
      const weatherData = await resp.json();
      console.log(chalk.bgGreenBright(`\nWeather Information: `));
      console.log(chalk.blue(`City: ${weatherData.name}`));
      console.log(chalk.blue(`Temparature: ${weatherData.main.temp}C`));
      console.log(
        chalk.blue(`Description: ${weatherData.weather[0].description}`)
      );
      console.log(chalk.blue(`Humidity: ${weatherData.main.humidity}`));
      console.log(chalk.blue(`Wind Speed: ${weatherData.wind.speed}`));
    });
  } catch (err) {
    console.log(err);
  }
};

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

const city = await rl.question(chalk.bgBlueBright("Enter city name: "));
await getWeatherData(city);
rl.close();
