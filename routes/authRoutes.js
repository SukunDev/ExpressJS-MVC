const router = require("express").Router();
const authController = require("../controllers/authController");

// Rute login
router.post("/login", authController.login);

module.exports = router;
