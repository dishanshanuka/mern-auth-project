import userModel from '../models/userModel.js';

/**
 * @desc    Get user profile data (Protected)
 * @route   GET /api/user/data
 * @access  Private
 */
export const getUserProfile = async (req, res) => {
    try {
        // Retrieve userId assigned by the userAuth middleware
        const userId = req.userId;

        // Find user and exclude sensitive fields like password and OTPs
        const user = await userModel.findById(userId).select('-password -verifyOtp -verifyOtpExpireAt -resetOtp -resetOtpExpireAt');
        
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Send a successful response with user profile data
        return res.json({ 
            success: true, 
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified,
            } 
        });

    } catch (error) {
        // Handle any unexpected server errors
        return res.status(500).json({ success: false, message: error.message });
    }
};