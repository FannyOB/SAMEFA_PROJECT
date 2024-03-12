import app from "./app.js";

const port = 3001;
//PORT
app.listen(port, () =>
  console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
);
