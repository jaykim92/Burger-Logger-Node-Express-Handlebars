// set dependencies
const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");
// set up express app
const app = express();
const port = 8080;
// set up middleware to allow us to get back response in json format
app.use(express.json());
// serve static files in the public folder
app.use(express.static("public"));