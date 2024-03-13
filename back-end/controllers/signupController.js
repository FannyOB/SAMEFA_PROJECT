import express from "express";
import createUser from "../routes/users/createUser.js";

const signupController = express.Router();

// Route pour se créer un compte = signup
signupController.post("/", createUser);

export default signupController;
