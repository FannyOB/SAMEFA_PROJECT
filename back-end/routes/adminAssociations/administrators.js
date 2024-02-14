// ce fichier n'apparaitra dans la l'appli celle ci à servi de test. Afin de savoir si notre projet est bien connecté 
//à notre instance!
import express, { Router } from "express";
import pool from "../../config/elephantsql.js";

const router = express.Router();

//requête SQL GET pour selectionner toutes des données de la table administrators
// GET /administrators
router.get('/', async (req,res)=>{

    try{
        const result = await pool.query('SELECT * FROM administrators');
        console.log("Récupération réussie!");
        res.json(result.rows);
    }catch(error) {
        console.log('Erreur lors de la requete SQL');
        res.status(500).send('Erreur lors de la requete SQL');
    }
  /*
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
    */
  });

  
  //requête SQL GET pour selectionner un id de la table administrators
  // GET /administrators/:id
  router.get('/:id', async (req, res) => {
    
    try {
        // Nous utilisons $1 comme paramètre pour éviter les injections SQL, et nous passons req.params.id comme valeur de ce paramètre.
        const result = await pool.query(`SELECT * FROM administrators WHERE administrator_id = $1`, [req.params.id]);
        console.log('Requete SQL REUSSI, id récupéré');
        res.json(result.rows);
    } catch (error) {
        console.log('Erreur lors de la requete SQL');
        res.status(500).send('Erreur lors de la récupération des données de la base de données!')
        //res.status(404).send(`L'ID ${req.params.id} n'existe pas`);
    }
    /*
    pool.query(`Select * FROM administrators WHERE administrator_id=${req.params.id}`, (err, result) => {
      if(!err){
        console.log('Requete SQL REUSSI, id récupéré');
        res.json(result.rows);
      }
      else{
        console.error('Erreur lors de la requete SQL', err)
        res.status(500).send('Erreur lors de la récupération des données de la base de données!');
      }
    });
    */
  });


//requête SQL POST pour ajouter un administrateur dans la table administrators
// POST /administrators
router.post('/', async (req, res) => {
    const { administrator_id, first_name, name, email, password } = req.body;
    console.log(req.body);

    try{
        const result = await pool.query(`INSERT INTO administrators (administrator_id, first_name, name, email, password)
        VALUES($1, $2, $3, $4, $5) RETURNING administrator_id`, 
        [administrator_id, first_name, name, email, password]);

        const insertedAdministratorId = result.rows[0].administrator_id;
        console.log('insertion administrateur dans la base de donnée réussie');
        res.status(201).json({ message: 'administrateur ajouté avec succès!', administrator_id: insertedAdministratorId});
    } catch (error) {
        console.error('Erreur d\'insertion administrateur dans la base de donnée', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    };

    /*
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
    */
  });


//requête SQL PUT pour mettre à jour un administrateur dans la table administrators
// PUT /administrators
router.put('/:id', async (req, res) =>{
    //récupération de l'identifiant de l'administrateur via le paramètre de la route
    const {first_name, name, email, password} = req.body;
    const administrator_id = req.params.id;
    console.log(req.body);

    try{
        const result = await pool.query(`UPDATE administrators SET first_name = $1, name = $2, email = $3,
        password = $4 WHERE administrator_id = $5`,
        [first_name, name, email, password, administrator_id]);

        console.log('Mise à jour de l\'administrateur dans la base de données réussie');
        res.status(201).json({message: 'Administrateur mis à jour avec succès!' });
    } catch (error){
        console.error('Erreur lors de la mise à jour de l\'administrateur dans la base de données', error);
        res.status(500).json({error: 'Erreur interne du serveur'});
    }
});


//requête SQL DELETE pour supprimer un administrateur dans la table administrators
// DELETE /administrators



export default router;