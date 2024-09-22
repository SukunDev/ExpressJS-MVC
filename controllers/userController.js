const User = require("../models/userModel");

// Mendapatkan semua user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Gagal mendapatkan data pengguna" });
  }
};

// Membuat user baru
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Gagal membuat pengguna" });
  }
};
