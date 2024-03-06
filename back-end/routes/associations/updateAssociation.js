import pool from "../../config/elephantsql.js";

//requête SQL PUT pour mettre à jour une association de la table ngo
// PUT /associations/:id
export const updateAssociation = async (req, res) => {
    //récupération de l'identifiant de l'association via le paramètre de la route
    const {ngo_name, category, creation_date, description_ong, website, photo_url, location } = req.body;
    const ngo_id = req.params.id;
    console.log(req.body);

    try{
        const result =  await pool.query(`UPDATE ngo
        SET ngo_name = $1,
            category = $2,
            creation_date = $3,
            description_ong = $4,
            website = $5,
            photo_url = $6,
            location = $7
        WHERE ngo_id = $8`,
        [ngo_name, category, creation_date, description_ong, website, photo_url, location, ngo_id]);

        console.log('Mise à jour de l\'association dans la base de données réussie');
        res.json({message: 'Assiociation modifiée avec succès!'});
    } catch (error){
        console.error('Erreur lors de la mise à jour de l\'association', error);
        res.status(500).json({error: 'Erreur interne du serveur'});
    }
    
};