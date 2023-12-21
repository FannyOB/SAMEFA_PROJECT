import express from "express";
import cors from "cors";

//const express = require('express');

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => res.send('Hello, Express 28!'));

app.listen(port, () =>
  console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
);
