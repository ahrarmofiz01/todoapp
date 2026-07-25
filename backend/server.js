const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/todos", (req, res) => {
    res.json([]);
});

app.listen(5000, () => {
    console.log("Server running");
});