const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const sequelize = require("./config/database");

// Inisialisasi Express
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

// Sync database dan menjalankan server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server berjalan di port 3000");
    });
  })
  .catch((err) => {
    console.log("Gagal sync database:", err);
  });
