"use strict"

const module_express = require("express");
const module_pug = require("pug");

const controller_home = require("./controller/home.js");
const controller_about = require("./controller/about.js");

const port = process.env.port || 3000;
    
const server = module_express();

server.set("views", "./views");
server.set("view engine", "pug");

server.use("/resource", module_express.static("./public"))

server.use(controller_home);
server.use(controller_about);

server.listen(port);