var express = require("express");
var path = require("path");
var app = express();

var publicPath = path.resolve(__dirname, "views");

app.get("/", (req, res) => {
    res.sendFile(publicPath + "/index.html");
})

app.use((req, res) => {
    res.status(404);
    res.send("Resource Not Found !!!");
})

app.listen(3030, () => {
    console.log("listening on port: 3030");
})