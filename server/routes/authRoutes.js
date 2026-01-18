import express from "express";
import { login, logout, register } from "../controllers/authController.js";

const authRoutes = express.Router();

// Logic for User Registration
authRoutes.post("/register", register);

// Logic for User Login
authRoutes.post("/login", login);

// Logic for User Logout
authRoutes.post("/logout", logout);

// Exporting the router to use in server.js
export default authRoutes;