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

// GET /associations/read/:id
export const getOneAssociation = async (req, res) => {
    //const {ngo_name, category, creation_date, description_ong, website, photo_url, location } = req.body;
    const ngo_id = req.params.id;
    console.log(req.params.id);

    try{
        const result = await pool.query(`SELECT * FROM ngos WHERE ngo_id = $1`, [ngo_id]);
        if(result.rows.length !== 0) {
            console.log('Affichage d\'une association réussie!');
            res.json(result.rows[0]);
        }else {
            console.log('Association non trouvée');
            res.status(500).json({error: 'Erreur interne du serveur' });
        }
        
    } catch (error) {
        console.log('Erreur lors de la requete SQL');
        res.status(500).send('Erreur lors de la requete SQL');
    }
};
