"use strict"

const module_express = require("express");
const module_pug = require("pug");

const port = process.env.port || 3000;
    
const server = module_express();

server.set("views", "./views");
server.set("view engine", "pug");

server.get("/", function(request, response) {
    response.render("home", { title: "pug test", message: "this is home" })
});

server.get("/about", function(request, response) {
    response.render("about", { title: "pug test", message: "this is about" })
});

server.listen(port);