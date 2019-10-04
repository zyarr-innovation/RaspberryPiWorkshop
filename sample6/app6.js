var express = require("express");
var path = require("path");
var app = express();

var publicPath = path.resolve(__dirname, "views");

//npm install ejs
app.set("views", publicPath);
app.set("view engine", "ejs");

var bulbState = "Off";
app.get("/", (req, res) => {
    res.render(publicPath + "/index.ejs", { BulbCurrentState: bulbState });
})

app.use((req, res) => {
    res.status(404);
    res.send("Resource Not Found !!!");
})

app.listen(3030, () => {
    console.log("listening on port: 3030");
})