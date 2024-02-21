import express from "express";
import pool from "../../config/elephantsql.js";


//requête SQL GET: pour afficher des données de la table ngos
//exemple:  Route::get('/associations/read', 'AssociationController@create') -> middleware('auth');
// GET /associations/read
export const getAssociations = async (req, res) => {

    try{
        const result = await pool.query(`SELECT * FROM ngos`);
        console.log('Affichage des associations réussie!')
        res.json(result.rows);
    }catch (error){
        console.log('Erreur lors de la requete SQL');
        res.status(500).send('Erreur lors de la requete SQL');
    }
};

