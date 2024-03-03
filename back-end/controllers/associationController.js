import express from "express";
import { getAssociations, getOneAssociation } from "../routes/associations/readAssociation.js";
import { createAssociation } from "../routes/associations/createAssociation.js";
import { updateAssociation } from "../routes/associations/updateAssociation.js";
import { deleteAssociation } from "../routes/associations/deleteAssociation.js";


// Controllers pour que les Routes puissent effectuer les requêtes sur la table ngos
const associationController = express.Router();

// Route pour afficher les associations de la table ngos
associationController.use('/read', getAssociations);

// Route pour afficher une association de la table ngos
associationController.use('/:id', getOneAssociation);

// Route pour la création d'une nouvelle association
associationController.post('/', createAssociation);

// Route pour la mise à jour d'une association
associationController.put('/update/:id', updateAssociation);

// Route pour la suppression d'une association
associationController.delete('/delete/:id', deleteAssociation);

export default associationController;