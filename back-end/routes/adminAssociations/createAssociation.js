// Route pour la création d'une nouvelle association.
import express  from "express";
import pool from "../../config/elephantsql.js";

const router = express.Router();

//requête SQL GET: pour ajouter des données de la table ngos
//exemple:  Route::get('/associations/create', 'AssociationController@create') -> middleware('auth');
// GET /associations/create