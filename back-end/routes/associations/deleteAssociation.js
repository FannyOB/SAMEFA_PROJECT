import pool from "../../config/elephantsql.js";

// requête SQL DELETE: pour la supression d'une association de la table ngo
// DELETE/associations/:id
const deleteAssociation = async (req, res) => {
  const ngo_id = req.params.id;
  console.log(req.params.id);

  try {
    const result = await pool.query(`DELETE FROM ngo WHERE ngo_id = $1`, [
      ngo_id,
    ]);

    console.log("suppression de l'association dans la base de données!");
    res.status(200).json({ message: "Association supprimée avec succès!" });
  } catch (error) {
    console.error(
      "Erreur lors de la suppression de l'association dans la base de données",
      error,
    );
    res.status(500).json({
      error: "Une erreur est survenue lors de la suppression de l'association.",
    });
  }
};

export default deleteAssociation;
