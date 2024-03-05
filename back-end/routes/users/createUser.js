//Route pour créer une association au profil utilisateur.
import express from "express";
import pool from "../../config/elephantsql.js";
import bcrypt from "bcrypt";

//POST/users
export const createUser = async (req, res) => {
    const {user_id, first_name, name, email, password, administrator} = req.body;
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const result = await pool.query(`INSERT INTO "user" (user_id, first_name, name, email, password, administrator)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING user_id`,
        [user_id, first_name, name, email, hashedPassword, administrator ]
        );

        const insertedUserId = result.rows[0].user_id;
        console.log('insertion d\'un utilisateur dans la base de donnée réussie');
        res.status(201).json({ message: 'user ajouté avec succès!', user_id: insertedUserId});

    } catch (error){
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur!', error});
    }

};

