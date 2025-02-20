import express from "express";
import { db } from "./connect.js";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const app = express();
const PORT = 3000;

app.get(`/`, (request, response) => {
  response.send("Ola");
});

app.get(`/artists`, async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get(`/songs`, async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Conectado na porta ${PORT}`);
});
