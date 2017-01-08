"use strict"

const module_express = require("express");

const about = module_express();

about.get("/about", function(request, response) {
    response.render("about", { title: "pug test", message: "this is the about controller" });
});

module.exports = about;