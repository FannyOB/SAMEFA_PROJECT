import pool from "../../config/elephantsql.js";
import bcrypt from "bcrypt";

//POST/users (login pour le chemin)
export const validateUser = async (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);

    try{
        const result = await pool.query(
            `SELECT * FROM "user" WHERE  email = $1`,
            [email]
        );
    
        if(result.rows.length > 0) {
            const user = result.rows[0];
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid) {
                console.log('connexion réussie');
                res.status(200).json({message: 'connection réussie!'});
            } else {
                console.log('mot de passe incorrect')
                res.status(200).json({message: 'mot de passe incorrect!'});
            }
            } else{
                console.log('utilisateur non trouvé!');
                res.status(404).json({message: 'utilisateur non trouvé!'});
            }
        }
       catch (error){
        console.error(error);
        res.status(500).json({error: 'erreur lors de la connection!'});
       }

    };
