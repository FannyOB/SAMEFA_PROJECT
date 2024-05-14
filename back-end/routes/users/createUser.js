// Route pour créer une association au profil utilisateur.
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../../config/elephantsql.js";
// import session from "express-session";
// import expressSession from "../../config/expressSession.js"

// POST/signup
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      `INSERT INTO "user" ( name, email, password, administrator)
        VALUES ($1, $2, $3, $4) RETURNING user_id`,
      [name, email, hashedPassword, false],
    );

    const insertedUserId = result.rows[0].user_id;

    // Stockez les informations de l'utilisateur dans la session
    // req.session.userId = insertedUserId;
    console.log("hello");
    console.log("insertion d'un utilisateur dans la base de donnée réussie");
    const token = jwt.sign({ userId: insertedUserId }, process.env.JWT_SECRET, {
      expiresIn: "7y",
    });
    res.status(200).json({ message: "user ajouté avec succès!", token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de l'utilisateur!" });
  }
};

export default createUser;
