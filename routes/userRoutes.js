const router = require("express").Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Rute untuk mendapatkan semua user (dilindungi oleh JWT)
router.get("/users", authMiddleware, userController.getAllUsers);

// Rute untuk membuat user baru (tidak dilindungi, misal untuk registrasi)
router.post("/users", userController.createUser);

module.exports = router;
