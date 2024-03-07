import express  from "express";
import { profile } from "../routes/users/profileUser.js";

const profileController = express.Router();

// Route pour se login 
profileController.get('/', profile);

export default profileController;