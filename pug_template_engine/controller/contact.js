"use strict"

const module_express = require("express");

const contact = module_express();

contact.get("/contact", function(request, response) {
    response.render("contact", { title: "pug test", message: "this is the contact controller" });
});

module.exports = contact;