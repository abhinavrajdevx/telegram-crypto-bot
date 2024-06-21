const axios = require("axios");

const search = (ctx) => {
  axios
    .get(
      `https://api.coingecko.com/api/v3/search/?query= ${
        ctx.text.split(" ")[1]
      }`
    )
    .then((response) => {
      try {
        let coins = "";
        for (let i = 0; i < response.data.coins.length; i++) {
          coins =
            coins +
            "\n" +
            `${i + 1}. ${response.data.coins[i].name} \nID: ${
              response.data.coins[i].id
            }\n`;
        }
        const message = `Found Coins\nCodes:\n ${coins}`;
        bot.telegram.sendMessage(ctx.chat.id, message, {});
      } catch (e) {}
    });
};

module.exports = { search };
