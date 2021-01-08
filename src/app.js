const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// routes
app.use("/api/git", require("../routes/git"));

module.exports = app;
