// Fichier de connection avec PostreSQL pgAdmin en local

import pkg from "pg"; // importation du module 'pg', cela importe la classe 'Pool' depuis le module 'pg'. Un 'Pool' est une maniere de gérer les connexions à la bdd de manière efficace
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg; // Un pool crée et gère un ensemble de connexions réutilisables. Ils sont utiles pour éviter d'avoir à ouvrir et fermer une connexion à chaque requête, ce qui peux être couteux en termes de performances.

// Cela va créer une instance 'Pool' en spécifiant les informations nécéssaires pour se connecter à la bdd
const pool = new Pool({
  user: process.env.DATABASE_PG_USER,
  host: process.env.DATABASE_PG_HOST,
  database: process.env.DATABASE_PG_NAME,
  password: process.env.DATABASE_PG_PASSWORD,
  port: process.env.DATABASE_PG_PORT,
});

// Test Affichage du message dans le terminal
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

/*
//Affichage de la table categories dans le terminal
pool.query(`select * from categories`, (err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    pool.end
});
*/

export default pool;
