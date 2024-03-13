import express from "express";
import validateUser from "../routes/users/validateUser.js";

const loginController = express.Router();

// Route pour se login
loginController.post("/", validateUser);

export default loginController;
