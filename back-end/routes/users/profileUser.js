import pool from "../../config/elephantsql.js";

/*
export const profile = async (req, res) => {
    const userId = req.session.userId; // Récupérez l'ID de l'utilisateur à partir de la session

    if (!userId) {
        // Si l'utilisateur n'est pas connecté, renvoyez une erreur non autorisée
        return res.status(401).json({ error: 'Non autorisé - veuillez vous connecter.' });
    }

    try {
        // Requête pour obtenir les informations de profil de l'utilisateur à partir de son ID
        const result = await pool.query(`SELECT user_id, first_name, last_name, email FROM "user" WHERE user_id = $1`, [userId]);
        
        // Vérifiez si l'utilisateur existe dans la base de données
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Utilisateur non trouvé.' });
        }

        // Renvoyez les informations de profil de l'utilisateur
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des informations de profil.' });
    }
};
*/
export const profile = async (req, res) => {
    // Vérifier si la session est active
    if (req.session && req.session.userId) {
        // La session est active, récupérer les informations de l'utilisateur connecté
        const userId = req.session.userId;

        try {
            // Requête pour obtenir les informations de profil de l'utilisateur à partir de son ID
            const result = await pool.query(`SELECT user_id, first_name, last_name, email FROM "user" WHERE user_id = $1`, [userId]);
            
            // Vérifiez si l'utilisateur existe dans la base de données
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Utilisateur non trouvé.' });
            }

            // Renvoyez les informations de profil de l'utilisateur
            res.status(200).json(result.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des informations de profil.' });
        }
    } else {
        // La session n'est pas active, renvoyer un message indiquant que l'utilisateur n'est pas connecté
        res.status(401).json({ error: 'Utilisateur non connecté.' });
    }
};

export default profile;