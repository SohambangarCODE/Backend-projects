const express = require("express");
const { message } = require("prompt");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "note created successfully!",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.delete("/notes/:idx", (req, res) => {
  delete notes[req.params.idx];
  res.status(204).json({
    message: "note deleted successfully!",
  });
});

app.patch("/notes/:idx", (req, res) => {
  notes[req.params.idx].description = req.body.description;

  res.status(200).json({
    message: "note modified successfully!",
  });
});

app.put("/notes/:idx", (req, res) => {
  notes[req.params.idx].title = req.body.title;
  notes[req.params.idx].description = req.body.description;

  res.status(200).json({
    message: "note modified successfully!",
  });
});

module.exports = app;
