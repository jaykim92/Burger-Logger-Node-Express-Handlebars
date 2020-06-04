// set dependencies
const express = require("express");
// set up express app
const port = process.env.PORT || 8080;
const app = express();
// set up middleware to allow us to get back response in json format
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// serve static files in the public folder
app.use(express.static("public"));

// set up dependency
const exphbs = require("express-handlebars");
// set up handlebars since we are using an outside engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import router
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// listen in on express server
app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`)
});
