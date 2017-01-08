"use strict"

const module_express = require("express");

const home = module_express();

home.get("/", function(request, response) {
    response.render("home", { title: "pug test", message: "this is the home controller" });
});

module.exports = home;