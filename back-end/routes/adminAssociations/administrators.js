// ce fichier n'apparaitra dans la l'appli celle ci à servi de test. Afin de savoir si notre projet est bien connecté 
//à notre instance!
import express, { Router } from "express";
import pool from "../../config/elephantsql.js";

const router = express.Router();

//requête SQL GET pour selectionner des données de la table administrators
// GET /administrators
router.get('/', (req,res)=>{
  
    pool.query('SELECT * FROM administrators', (err, result) => {
      if(err){
        console.error('Erreur lors de la requete SQL', err);
          res.status(500).send('Erreur lors de la récupération des données de la base de données!');
      }else{
        console.log("Récupération réussie!");
        //Renvoie les résultats en tant que réponse JSON ds le navigateur
        res.json(result.rows);
      }
    });
  });

  
  //requête SQL GET pour selectionner un id de la table administrators
  // GET /administrators/:id
  router.get('/:id', (req, res) => {
    
    pool.query(`Select * FROM administrators WHERE administrator_id=${req.params.id}`, (err, result) => {
      if(!err){
        console.log(' requete SQL REUSSI, id récupéré');
        res.json(result.rows);
      }
      else{
        console.error('Erreur lors de la requete SQL', err)
        res.status(500).send('Erreur lors de la récupération des données de la base de données!');
      }
    });
    
  });


//requête SQL POST pour ajouter un administrateur dans la table administrators
// POST /administrators
router.post('/', (req, res) => {
    const {administrator_id, first_name, name, email, password } = req.body;
    console.log(req.body)

    pool.query(`INSERT INTO administrators (administrator_id, first_name, name, email, password) 
      VALUES($1, $2, $3, $4, $5)`,[administrator_id, first_name, name, email, password], 
     (err, result) => {
      if (err) {
        console.error('Erreur d\'insertion administrateur dans la base de donnée', err);
        res.status(500).json({error: 'Erreur interne du serveur'});
      }
      else{
        console.log('insertion administrateur dans la base de donnée réussi');
        res.status(201).json({message: 'administrateur ajouté avec succès!'})
      }
    });  
  });

//requête SQL POST pour ajouter un administrateur dans la table administrators
// DELETE /administrators


  export default router;