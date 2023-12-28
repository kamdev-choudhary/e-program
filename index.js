const express = require("express");
const path = require("path");

const port = 8080;
const app = express();

app.set("view engine", "ejs");

app.listen(port, (req, res) =>{
    console.log(`server is liesting at port : ${port}`);
})

app.get("/", (req, res) => {
    res.render(index.html)
});
