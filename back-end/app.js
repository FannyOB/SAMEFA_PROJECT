import express from "express";
import cors from "cors";
// import pool from "./config/connection.js";
// import administratorsRouter from "./routes/associations/administrators.js"; // Importez les routes des administrateurs=>fichier TEST
import dotenv from "dotenv";
import associationController from "./controllers/associationController.js";
import signupController from "./controllers/signupController.js";
import loginController from "./controllers/loginController.js";

dotenv.config();

const app = express();

// Option du cors
const corsOptions = {
  // pour dire que j'autorise spécifiquement les requêtes qui viennent de cette origine.
  origin: "https://samefa-project.vercel.app", // mettre de lien url Vercel
  optionsSuccessStatus: 200,
  credentials: true,
};

// les middlewares
// Express répond correctement aux requêtes de pré-vérification OPTIONS avec les en-têtes appropriés, y compris Access-Control-Allow-Origin ('*')
app.use("*", cors(corsOptions));
// utilisation de express.json( pour parser le corps de requêtes JSON)
app.use(express.json());

// ----------------- Routes ---------------------------------------------------------------
// Utilisez les routes de la table "administrators" qui a été modifié en "user" -> à définir par la suite
// app.use("/user", administratorsRouter);

// Route  d'accueil (page d'accueil), affichage des associations
app.use("/associations", associationController);

// Route pour l'inscription
app.use("/signup", signupController);

// Route pour la connection
app.use("/login", loginController);

// app.use('/profil', profilController);

// PORT const port = 3001;
if (!(process.env.NODE_ENV === "test" && process.env.JEST_TEST === "true")) {
  const port = process.env.PORT || 3001; // remettre en 3001 ici et dans le .env
  app.listen(port, () => {
    console.log(
      `Notre application Node est démarée sur le port local :${port}`,
    );
  });
}

export default app;
