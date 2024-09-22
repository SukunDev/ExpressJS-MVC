const { Sequelize } = require("sequelize");

// Membuat koneksi ke database MySQL
const sequelize = new Sequelize("siswa_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Menguji koneksi
sequelize
  .authenticate()
  .then(() => console.log("Koneksi ke MySQL berhasil!"))
  .catch((err) => console.log("Koneksi gagal:", err));

module.exports = sequelize;
