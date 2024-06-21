const { search, trending, price } = require("./bot_commands");

const initializeCommands = (bot) => {
  bot.command("search", search);
  bot.command("trending", trending);
  bot.command("price", price);
};

module.exports = { initializeCommands };
