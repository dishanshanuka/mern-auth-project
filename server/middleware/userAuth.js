import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    // Check if the authentication token exists in cookies
    if (!token) {
        return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    try {
        // Verify the JWT token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.id) {
            // Assign the decoded ID directly to the request object
            req.userId = decoded.id; 
        } else {
            return res.status(401).json({ success: false, message: "Token is not valid, please login again" });
        }

        // Pass control to the next function (the Controller)
        next();

    } catch (error) {
        // Handle invalid or expired tokens
        return res.status(401).json({ success: false, message: error.message });
    }
}

export default userAuth;