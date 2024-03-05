import express  from "express";
import { createUser } from "../routes/users/createUser.js";
//import { validateUser } from "../routes/users/validateUser.js";


const signupController = express.Router();

//ici pour que ça fonctionne, modifier par authController.post('/', createUser);
//et modifier la ligne 14, authController.post('/login', validateUser);
// Route pour se créer un compte = signup
signupController.post('/', createUser);

//ici pour que ça fonctionne remodifier la ligne 10 par: authController.post('/signup', createUser);
//et modifier la ligne 14, authController.post('/', validateUser);
//authController.post('/', validateUser);

/**En fait ces nomenclatures ne fonctionnent pas : '/signup' et '/login'
 * et lorsque l'on modifie signup=authController.post('/', createUser) et login'=authController.post('/', validateUser), il y a confusion des routes
*/

export default signupController;

