import pkg  from 'pg'; //importation du module 'pg', cela importe la classe 'Pool' depuis le module 'pg'. Un 'Pool' est une maniere de gérer les connexions à la bdd de manière efficace
import dotenv from 'dotenv';

dotenv.config();

//Un pool crée et gère un ensemble de connexions réutilisables. Ils sont utiles pour éviter d'avoir à ouvrir et fermer une connexion à chaque requête, ce qui peux être couteux en termes de performances.
const { Pool } = pkg;
//Cela va créer une instance 'Pool' en spécifiant les informations nécéssaires pour se connecter à l'instance ElephantSQL 
const pool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING // indiqué dans la page DETAILS sur Elephant SQL
});

//Test Affichage du message dans le terminal
pool.connect((err, client, release) => {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', (err, result) => {
    release();// Libérer le client pour le remettre dans le pool
    if(err) {
      return console.error('error running query', err);
    }
    else{
        console.log(result.rows[0].theTime);
        // >> output: 2024-02-09T14:19:53.959Z
        console.log("connected to database");
    }
  });
});

//Test Affichage de la table categories dans le terminal
/*
pool.query(`SELECT * FROM categories`, (err, res) => {
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
})
*/

export default pool;
