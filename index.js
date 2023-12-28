const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

app.set("views", path.join(__dirname, "views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const port = 8080;
const app = express();

app.listen(port, (req, res) =>{
    console.log(`server is liesting at port : ${port}`);
})

app.get("/", (req, res) => {
    res.render(index.html)
});
