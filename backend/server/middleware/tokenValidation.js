const jwt = require("jsonwebtoken");

module.exports.validateToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        status: 401,
        message: "Token is missing from header",
      });
    }

    const authHeader = req.headers.authorization;
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status: 401,
        message:
          "Invalid authorization header format. Expected: Bearer <token>",
      });
    }

    const userToken = authHeader.split("Bearer ")[1];
    if (!userToken) {
      return res.status(401).json({
        status: 401,
        message: "Token is missing after Bearer",
      });
    }

    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || "default-secret-key"
    );

    // Add the decoded token to the request for use in other middleware/routes
    req.user = decodedToken;
    return next();
  } catch (error) {
    console.error("Error in tokenValidation.js", error);
    return res.status(401).json({
      status: 401,
      message: error.message,
    });
  }
};
