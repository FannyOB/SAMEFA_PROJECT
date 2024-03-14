import express from "express";
import cors from "cors";
// import pool from "./config/connection.js";
// import administratorsRouter from "./routes/associations/administrators.js"; // Importez les routes des administrateurs=>fichier TEST
import associationController from "./controllers/associationController.js";
import signupController from "./controllers/signupController.js";
import loginController from "./controllers/loginController.js";

const app = express();

// app.use(sessionConfig); // Utilisez la configuration de session

// Option du cors
const corsOptions = {
  // pour dire que j'autorise spécifiquement les requêtes qui viennent de cette origine.
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};

// les middlewares
// Express répond correctement aux requêtes de pré-vérification OPTIONS avec les en-têtes appropriés, y compris Access-Control-Allow-Origin ('*')
app.use("*", cors(corsOptions));
// utilisation de express.json( pour parser le corps de requêtes JSON)
app.use(express.json());

// ----------------- Routes ---------------------------------------------------------------
// Utilisez les routes de la table user -> à définir par la suite
// app.use("/user", administratorsRouter);

// Futures Routes à définir par la suite avec le controlleur
app.use("/associations", associationController);

// Route pour l'inscription
app.use("/signup", signupController);

// Route pour la connection
app.use("/login", loginController);

// app.use('/logout', );
// app.use('/users', ); ou '/profil'

const port = 3001;

// PORT
app.listen(port, () =>
  console.log(
    `Notre application Node est démarée sur : http://localhost:${port}`,
  ),
);
