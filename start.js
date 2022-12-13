const cookie = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const dir = process.cwd();
const api = require("./main.js");
const rd = (angka) => {
        return Math.floor(Math.random() * angka) + 3000}
const PORT = process.env.PORT || rd(9000)
app.use(cors());
app.use(cookie());
app.use(express.json());
app.use(logger("dev"));
app.set("json spaces", 2);
app.use(api);

app.listen(PORT, () => {
console.log(PORT)
});

module.exports = app;
