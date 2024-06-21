const axios = require("axios");

const price = (ctx) => {
  axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${
        ctx.text.split(" ")[1]
      }&vs_currencies=usd`
    )
    .then((response) => {
      try {
        rate = response.data[ctx.text.split(" ")[1]].usd;
        const message = `Price of ${ctx.text.split(" ")[1]} is $${rate}`;
        bot.telegram.sendMessage(ctx.chat.id, message, {});
      } catch (e) {}
    });
};

module.exports = { price };
