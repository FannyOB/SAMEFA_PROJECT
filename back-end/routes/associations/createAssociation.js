import pool from "../../config/elephantsql.js";


//requête SQL POST: pour ajouter une association de la table ngo
// GET /associations
export const createAssociation = async (req, res) => {
    const { ngo_id, ngo_name, category, creation_date, description_ong, website, photo_url, location } = req.body;
    console.log(req.body);
    
    try{
        const result = await pool.query(`INSERT INTO ngo (ngo_id, ngo_name, category, creation_date, description_ong, website, photo_url, location)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING ngo_id`,
        [ngo_id, ngo_name, category, creation_date, description_ong, website, photo_url, location]);

        const insertedAssociationId = result.rows[0].ngo_id;
        console.log('insertion association dans la base de donnée réussie');
        res.status(201).json({ message: 'association ajouté avec succès!', ngo_id: insertedAssociationId});
    } catch (error) {
        console.log('Erreur d\'insertion association dans la base de donnée', error);
        res.status(500).json({ error: 'Erreur interne du serveur'});
    }
};