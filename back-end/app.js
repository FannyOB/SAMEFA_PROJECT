import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = 3000;

//app.get('/', (req, res) => res.send('Hello, Express 28!'));

app.get('/getData', (req, res) => {res.send('connection ok!');
});

app.listen(port, () =>
  console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
);
