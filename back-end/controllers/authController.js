import express  from "express";
import { createUser } from "../routes/users/createUser.js";


const authController  = express.Router();

authController.post('/', createUser);

//authController.post('/login', validateUser);

export default authController;

