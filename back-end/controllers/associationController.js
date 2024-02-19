import express from "express";
import {getAssociations} from "../routes/adminAssociations/readAssociation.js"


const associationController = express.Router();

// Route pour obtenir toutes les associations
associationController.use('/', getAssociations);

export default associationController;