const express = require("express");

const PotterWorld = require("./potterWorld/potterWorld-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/potterWorld ", (req, res) => {
  PotterWorld.getAll()
    .then(potter => {
      res.status(200).json(potter);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/potterWorld/:id", (req, res) => {
  res.end()
});

server.post("/potterWorld", async (req, res) => {
  res
    .status(201)
    .json(await PotterWorld.insert(req.body))
});

server.delete("/potterWorld/:id", (req, res) => {
  res.end()
});

server.put("/potterWorld/:id", (req, res) => {
  res.end()
});

module.exports = server;