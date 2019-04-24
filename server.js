var express = require("express");
var app = express();

app.use(express.static("output")).listen(34567);