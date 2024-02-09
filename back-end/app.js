import express from "express";
import cors from "cors";
import { ngoList } from "./db/mockNgos.js";
//import pool from "./config/connection.js";
import pool from "./config/elephantsql.js";

const app = express();

//Option du cors
const corsOptions = { //pour dire que j'autorise spécifiquement les requêtes qui viennent de cette origine.
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// les middlewares
app.use(cors(corsOptions));
//utilisation de express.json( pour parser le corps de requêtes JSON)
app.use(express.json());


const port = 3001;

//PORT
app.listen(port, () =>
  console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
);

//-------------------------------------------------

//TEST REQUETES POUR CONNECTION FRONT ==> ce sera les futures Routes

//app.get('/', (req, res) => res.send('Hello, Express 28!'));

app.get('/getData', (req, res) => {res.send('connection ok!');
});

//-------------------------------------------------
//Routes
//GET

// requête GET pour récupérer toute la liste des associations
app.get ('/ngos',(req,res)=>
  {res.json(ngoList)})


// requête GET pour récupérer par son ID une seule association
app.get('/ngos/:id',(req,res)=>
  { let selectId = parseInt(req.params.id);
    let ngoId = ngoList.find(ngo => ngo.id === selectId)

    if(ngoId){
      res.json(ngoId);
    }else {
      res.status(404).json({message:"Associaiton non trouvée"})
    }
});

//requête SQL pour selectionner des données de la table administrators
app.get('/administrators', (req,res)=>{
  
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

//requête SQL pour selectionner un id de la table administrators
app.get('/administrators/:id', (req,res)=>{
  
  pool.query(`Select * FROM administrators WHERE administrator_id=${req.params.id}`, (err, result) => {
    if(!err){
      console.log(' requete SQL REUSSI');
      res.json(result.rows);
    }
    else{
      console.error('Erreur lors de la requete SQL', err)
      res.status(500).send('Erreur lors de la récupération des données de la base de données!');
    }
  });
  
});

//app.get('/', (req, res) => res.send('Hello, Express 28!'));
app.get('/homepage', (req, res) => res.send('Welcome Fanny!!'));

//requête SQL pour selectionner un id de la table administrators
app.post('')
