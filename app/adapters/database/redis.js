const { createClient } = require("redis");

rd_client = createClient({
  host: "redis"
  // port: 6379,
  // password: 'lizaliza'
});

rd_client.on("connect", () => console.log("::> Redis Server is Ready"));
rd_client.on("error", (err) => console.log("<:: Redis Client Error", err));

// (async () => {
//     await rd_client.connect();
// })();

module.exports = rd_client;
