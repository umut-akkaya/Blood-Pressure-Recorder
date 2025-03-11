// const app = require("./data");
// const serverless = require("serverless-http");
//
// module.exports = serverless(app);

const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const dataRoutes = require("./data");

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", dataRoutes);

// Vercel için Serverless Handler
module.exports = app;
module.exports.handler = serverless(app);
