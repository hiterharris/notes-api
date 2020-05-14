const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const NotesRouter = require('./notes/notes-router.js');

const server = express();

server.use(bodyParser.json());
server.use(cors());
server.use('/api/notes', NotesRouter);

server.get("/", (req, res) => {
  res.send('Notes App');
});

module.exports = server;
