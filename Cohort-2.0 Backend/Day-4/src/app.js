const express = require("express")

const app = express() // create a server

// configure the server
app.use(express.json()) 

notes = []

// POST /notes
app.post("/notes", (req, res)=>{
    notes.push(req.body)
    res.send("note created successfully!")
})

//  GET /notes
app.get("/notes", (req, res)=>{
    res.send(notes)
})

// DELETE /notes
// params
// delete /notes/0
app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index]
    res.send("note deleted successfully!")
})


/* PATCH /notes/:index */
/* req.body = {description :- "sample modified description."} */

app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].description = req.body.description
    res.send("note updated successfully!")
})


module.exports = app