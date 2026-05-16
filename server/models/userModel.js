import mongoose from "mongoose";

// Define the User Schema structure for MongoDB
const userSchema = new mongoose.Schema({
    // User's full name
    name: { 
        type: String, 
        required: true 
    },
    // User's email address (Must be unique and lowercase)
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    // Hashed password for security
    password: { 
        type: String, 
        required: true 
    },
    // OTP code sent for email verification
    verifyOtp: { 
        type: String, 
        default: '' 
    },
    // Expiration timestamp for the verification OTP
    verifyOtpExpiredAt: { 
        type: Number, 
        default: 0 
    },
    // Status to check if the user has verified their account
    isAccountVerified: { 
        type: Boolean, 
        default: false 
    },
    // OTP code sent for password reset requests
    resetOtp: { 
        type: String, 
        default: '' 
    },
    // Expiration timestamp for the reset OTP
    resetOtpExpiredAt: { 
        type: Number, 
        default: 0 
    },

}, { timestamps: true }); // Automatically adds 'createdAt' and 'updatedAt' fields

// Create the model from the schema, ensuring it's not recreated if it already exists
const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;