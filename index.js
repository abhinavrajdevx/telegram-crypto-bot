const { Telegraf } = require("telegraf");
require("dotenv").config();

const { initializeCommands } = require("./commands.js");

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

function main() {
  console.log("BOT STARTED...");
  initializeCommands(bot);
  bot.launch();
}

main();
