import express from "express";
import cors from "cors";
import { ngoList } from "./db/mockNgos.js";
//import pool from "./config/connection.js";
//import pool from "./config/elephantsql.js";
import administratorsRouter from "./routes/adminAssociations/administrators.js"; // Importez les routes des administrateurs

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


//----------------- Routes ---------------------------------------------------------------
// Utilisez les routes des administrateurs -> à définir par la suite
app.use('/administrators', administratorsRouter);
// Futures Routes à définir par la suite...
//app.use('/associations', );
//app.use('/signup', );
//app.use('/login', );
//app.use('/logout', );
//app.use('/users', ); ou '/profil'

const port = 3001;

//PORT
app.listen(port, () =>
  console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
);


//----------------------------------------------------------------------------------------
//TEST REQUETES POUR CONNECTION FRONT ==> ce sera les futures Routes

//app.get('/', (req, res) => res.send('Hello, Express 28!'));
app.get('/getData', (req, res) => {res.send('connection ok!');
});

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

//app.get('/homepage', (req, res) => res.send('Welcome Fanny!!'));


