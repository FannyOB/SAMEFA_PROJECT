import express from "express";
import cors from "cors";
import { ngoList } from "./db/mockNgos.js";

const app = express();

// les middlewares
app.use(cors());
app.use(express.json());

const port = 3000;

//-------------------------------------------------

//TEST REQUETES

//app.get('/', (req, res) => res.send('Hello, Express 28!'));

app.get('/getData', (req, res) => {res.send('connection ok!');
});

//-------------------------------------------------

//GET

// requête GET pour récupérer toute la liste des associations
app.get ('/ngos',(req,res)=>
  {res.json(ngoList)})


// requête GET pour récupérer par son ID une seule associations
app.get('/ngos/:id',(req,res)=>
  { let selectId = parseInt(req.params.id);
    let ngoId = ngoList.find(ngo => ngo.id === selectId)

    if(ngoId){
      res.json(ngoId);
    }else {
      res.status(404).json({message:"Associaiton not find"})
    }
});



//-------------------------------------------------

app.listen(port, () =>
  console.log(`Notre application Node est démarée sur : http://localhost:${port}`)
);
