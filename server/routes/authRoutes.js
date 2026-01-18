import express from "express";
import { login, logout, register, sendVerifyOtp, verifyEmail } from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";
import { send } from "vite";

const authRoutes = express.Router();

// Logic for User Registration
authRoutes.post("/register", register);

// Logic for User Login
authRoutes.post("/login", login);

// Logic for User Logout
authRoutes.post("/logout", logout);

// Logic for Sending Verification OTP
authRoutes.post("/send-verify-otp", userAuth, sendVerifyOtp);

// Logic for Verifying User Account
authRoutes.post("/verify-account", userAuth, verifyEmail);


// Exporting the router to use in server.js
export default authRoutes;