const express = require("express");

const { homePage,createNote,updateNote,deleteNote } = require("./controllers/controller");

const route = express.Router();



route.get("/",homePage);

route.post("/",createNote );

route.post("/update", updateNote);

route.post("/delete", deleteNote);

module.exports = route;
