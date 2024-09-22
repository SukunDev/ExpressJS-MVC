const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig");

// Middleware untuk memverifikasi JWT
module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token tidak disediakan" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], jwtConfig.secret); // split untuk menghapus "Bearer"
    req.user = decoded; // Menyimpan data user ke dalam request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token tidak valid" });
  }
};
