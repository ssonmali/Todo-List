const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
var items = [];
var examle = "working";
app.get("/", function (req, res) {
    res.render("list", { ejes: items });
}
);
app.post("/", function (req, res) {
    var item = req.body.baka;
    items.push(item);
    res.redirect("/");
});

app.listen(8000, function () {
    console.log("Server staarted");
});