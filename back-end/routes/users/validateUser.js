import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../../config/elephantsql.js";

// POST/login
const validateUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const result = await pool.query(`SELECT * FROM "user" WHERE  email = $1`, [
      email,
    ]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        console.log("connexion réussie");
        const tokenPayload = {
          userId: user.user_id,
          isAdmin: user.administrator,
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
          expiresIn: "2m",
        });

        // req.session.userId = user.user_id;
        // console.log(req.session);//enregistre un identifiant d'utilisateur et déclenche la création d'un cookie de session
        // console.log(req.session.id);// enregistre un identifiant
        res.status(200).json({
          message: "connection réussie!",
          token,
          isAdmin: user.administrator,
        });
      } else {
        console.log("mot de passe incorrect");
        res.status(401).json({ message: "mot de passe incorrect!" });
      }
    } else {
      console.log("utilisateur non trouvé!");
      res.status(404).json({ message: "utilisateur non trouvé!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "erreur lors de la connection!" });
  }
};

export default validateUser;
