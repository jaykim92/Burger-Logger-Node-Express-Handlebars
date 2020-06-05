// set dependencies
const express = require("express");
const router = express.Router();
// import models from burger.js
const burger = require("../models/burger");

// create the router
router.get("/", (req, res) => {
    burger.selectAll(data => {
        // data comes back as an array of objects from the database
        // render page using index.handlebars, passing in the data with the key "burgers" to refer to in our handlebars code
        res.render("index", {burgers: data})
    })
});

router.post("/api/burgers", function(req, res) {
    // use req.body, which returns an array of objects holding the user's input
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        //send back the id of the new burger
        burger.selectAll(data => {
            res.render("index", {burgers: data})
        })
        // res.json({id: result.insertId});
    })
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = `id = ${req.params.id}`;
    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// export router to server.js
module.exports = router;