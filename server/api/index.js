const app = require("./data");
const serverless = require("serverless-http");

module.exports = serverless(app);
