const axios = require("axios");

const trending = (ctx) => {
  axios
    .get(`https://api.coingecko.com/api/v3/search/trending`)
    .then((response) => {
      try {
        let coins = "";
        for (let i = 0; i < response.data.coins.length; i++) {
          coins =
            coins +
            "\n\n" +
            `${i + 1}. ${response.data.coins[i].item.name} \n\n Symbol : ${
              response.data.coins[i].item.symbol
            } \n Price (USD) : $${
              response.data.coins[i].item.data.price
            }  \n Price (BTC) : ${
              response.data.coins[i].item.data.price_btc
            }\n Market Cap (USD) : ${
              response.data.coins[i].item.data.market_cap
            }\n Market Cap (BTC) : ${
              response.data.coins[i].item.data.market_cap_btc
            } \n Total Volume (USD) : ${
              response.data.coins[i].item.data.total_volume
            } \n Total Volume (BTC) : ${
              response.data.coins[i].item.data.total_volume_btc
            }
          `;
        }
        const message = `Trending Coins\nCodes:\n ${coins}`;
        bot.telegram.sendMessage(ctx.chat.id, message, {});
      } catch (e) {}
    });
};

module.exports = { trending };
