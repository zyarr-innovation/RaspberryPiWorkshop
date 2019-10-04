var express = require("express");
var path = require("path");
var rpio = require("rpio");

var app = express();

var publicPath = path.resolve(__dirname, "views");

//npm install ejs
app.set("views", publicPath);
app.set("view engine", "ejs");

//npm install rpio
var bulbState = "OFF";
rpio.open(PIN_NO, rpio.OUTPUT, rpio.LOW);

app.get("/", (req, res) => {
    res.render(publicPath + "/index.ejs", { BulbCurrentState: bulbState });
})

app.get("/on", (req, res) => {
    bulbState = "ON";
    rpio.write(PIN_NO, rpio.HIGH);
    res.redirect("/");
})

app.get("/off", (req, res) => {
    bulbState = "OFF";
    rpio.write(PIN_NO, rpio.LOW);
    res.redirect("/");
})

app.use((req, res) => {
    res.status(404);
    res.send("Resource Not Found !!!");
})

app.listen(3030, () => {
    console.log("listening on port: 3030");
})