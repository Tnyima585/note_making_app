const express = require("express");

// const { homePage } = require("./controllers/controller");


const route = express.Router();

const notes = [
  {
    noteId: 1,
    noteContent: "Hey, you can add your important notes here",
  },
];

route.get("/", function (req, res) {
  res.render("home", { data: notes });
});

route.post("/", (req, res) => {
  const noteContent = req.body.noteContent;
  const noteId = notes.length + 1;

  notes.push({
    noteId: noteId,
    noteContent: noteContent,
  });
  console.log(req.body);
  console.log(notes);
  res.render("home", { data: notes });
});

route.post("/update", (req, res) => {
  var noteId = req.body.noteId;
  var noteContent = req.body.noteContent;

  notes.forEach((note) => {
    if (note.noteId == noteId) {
      note.noteContent = noteContent;
    }
  });
  res.render("home", {
    data: notes,
  });
});

route.post("/delete", (req, res) => {
  var noteId = req.body.noteId;
  var j = 0;
  notes.forEach((note) => {
    j = j + 1;
    if (note.noteId == noteId) {
      notes.splice(j - 1, 1);
    }
  });
  res.render("home", { data: notes });
});



module.exports = route;
