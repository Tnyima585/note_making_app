const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route");

const app = express();

app.set("view engine", "ejs");
app
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);

app.listen(3000, (req, res) => {
  console.log("App is running on port 3000");
});

module.exports = route;
