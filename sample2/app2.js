var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("home");
});

app.get('/about', (req, res) => {
    res.send("about");
})

app.use((req, res) => {
    res.status(404);
    res.send("Resource not found !!!");
});


app.listen(3030, () => {
    console.log("listening on port: 3030");
})