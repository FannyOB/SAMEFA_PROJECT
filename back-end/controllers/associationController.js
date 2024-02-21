import express from "express";
import { getAssociations } from "../routes/adminAssociations/readAssociation.js"
import { createAssociation } from "../routes/adminAssociations/createAssociation.js";
import { updateAssociation } from "../routes/adminAssociations/updateAssociation.js";


const associationController = express.Router();

// Controllers pours les Routes pour effectuer le requêtes sur la table ngos
// Route pour afficher des données de la table ngos
associationController.use('/read', getAssociations);

// Route pour la création d'une nouvelle association
associationController.use('/create', createAssociation);

// Route pour la création d'une nouvelle association
associationController.use('/update', updateAssociation);

export default associationController;