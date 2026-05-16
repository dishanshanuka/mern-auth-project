import express from "express";
import { 
    login, 
    logout, 
    register, 
    sendVerifyOtp, 
    verifyEmail, 
    isAuth, 
    sendResetOtp,
    resetPassword
} from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

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

// Logic for Checking if User is Authenticated
authRoutes.post("/is-auth", userAuth, isAuth);

// Logic for Sending Password Reset OTP
authRoutes.post("/send-reset-otp", sendResetOtp);

// Logic for Resetting Password
authRoutes.post("/reset-password", resetPassword);

export default authRoutes;