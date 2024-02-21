import express from "express";
import { getAssociations } from "../routes/adminAssociations/readAssociation.js"
import { createAssociation } from "../routes/adminAssociations/createAssociation.js";


const associationController = express.Router();

// Controllers pours les Routes pour effectuer le requêtes sur la table ngos
// Route pour afficher des données de la table ngos
associationController.use('/read', getAssociations);

// Route pour la création d'une nouvelle association
associationController.use('/create', createAssociation);


export default associationController;