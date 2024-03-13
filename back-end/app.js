import express from "express";
import cors from "cors";
import { ngoList } from "./db/mockNgos.js";
//import pool from "./config/connection.js";
import sessionConfig from "./config/expressSession.js"
import administratorsRouter from "./routes/associations/administrators.js"; // Importez les routes des administrateurs=>fichier TEST
import associationController from "./controllers/associationController.js";
import signupController from "./controllers/signupController.js";
import loginController from "./controllers/loginController.js";
import profileController from "./controllers/profileController.js";

const app = express();

//app.use(sessionConfig); // Utilisez la configuration de session

//Option du cors
const corsOptions = { //pour dire que j'autorise spécifiquement les requêtes qui viennent de cette origine.
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};

// les middlewares
//Express répond correctement aux requêtes de pré-vérification OPTIONS avec les en-têtes appropriés, y compris Access-Control-Allow-Origin ('*')
app.use('*',cors(corsOptions));
//utilisation de express.json( pour parser le corps de requêtes JSON)
app.use(express.json());


//----------------- Routes ---------------------------------------------------------------
// Utilisez les routes de la table user -> à définir par la suite
app.use('/user', administratorsRouter);

// Futures Routes à définir par la suite avec le controlleur
app.use('/associations', associationController);

// Route pour l'inscription
app.use('/signup', signupController); 

// Route pour la connection
app.use('/login', loginController);

// Route pour la connection
app.use('/profile', profileController);

//app.use('/logout', );
//app.use('/users', ); ou '/profil'

/*PORT 
if: solution pour ne pas écouter explicitement le port lors de l'exécution de tests.
lorsque l'on alimente l'application pour supertest, elle exécutera l'application sur le port 0, puisqu'elle ne s'exécute pas déjà sur un port.
*/
const port = 3001;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () =>
    console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
  )
};


//PARTIE DE CODE OBSOLETE A SUPPRIMER UNE FOIS ROUTES VERS BDD EFFECTUEES!!
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


export default app;
