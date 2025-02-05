# Express.js REST API dengan Arsitektur MVC

Proyek ini adalah implementasi REST API menggunakan Express.js dengan arsitektur Model-View-Controller (MVC) untuk struktur yang lebih terorganisir dan mudah dikembangkan.

## 🚀 Fitur
- Struktur berbasis MVC untuk pemisahan logika bisnis
- CRUD (Create, Read, Update, Delete) API
- Middleware untuk autentikasi dan logging
- Menggunakan database (MongoDB atau MySQL)
- Routing yang terstruktur

## 🛠 Teknologi yang Digunakan
- Node.js
- Express.js
- MongoDB atau MySQL
- Mongoose (jika menggunakan MongoDB)
- Sequelize (jika menggunakan MySQL)

## 📦 Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/SukunDev/ExpressJS-MVC.git
```

### 2. Masuk ke Direktori Project
```bash
cd ExpressJS-MVC
```

### 3. Install Dependensi
```bash
npm install
```

### 4. Konfigurasi Environment
Buat file `.env` dan tambahkan konfigurasi berikut:
```env
PORT=5000
DB_URI=mongodb://localhost:27017/mydatabase  # Jika menggunakan MongoDB
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=mydatabase  # Jika menggunakan MySQL
JWT_SECRET=your_secret_key
```

### 5. Jalankan Server
```bash
npm start
```
Atau jalankan dengan Nodemon untuk mode pengembangan:
```bash
npm run dev
```

## 🔥 Struktur Proyek
```
express-mvc-api/
│-- src/
│   ├── controllers/   # Logika bisnis
│   ├── models/        # Definisi model database
│   ├── routes/        # Routing API
│   ├── middlewares/   # Middleware aplikasi
│   ├── config/        # Konfigurasi database dan env
│   ├── utils/         # Helper functions
│-- app.js             # Entry point aplikasi
│-- package.json       # File konfigurasi npm
```

## 📌 Penggunaan API

### 1. Endpoint: `/api/users`
**Method:** `GET`
- **Deskripsi:** Mendapatkan daftar pengguna
- **Contoh Request:**
```bash
curl -X GET http://localhost:5000/api/users
```
- **Contoh Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

### 2. Endpoint: `/api/users/:id`
**Method:** `GET`
- **Deskripsi:** Mendapatkan detail pengguna berdasarkan ID

### 3. Endpoint: `/api/users`
**Method:** `POST`
- **Deskripsi:** Menambahkan pengguna baru

### 4. Endpoint: `/api/users/:id`
**Method:** `PUT`
- **Deskripsi:** Memperbarui data pengguna berdasarkan ID

### 5. Endpoint: `/api/users/:id`
**Method:** `DELETE`
- **Deskripsi:** Menghapus pengguna berdasarkan ID

## 📜 Lisensi
Proyek ini menggunakan lisensi MIT. Silakan cek file `LICENSE` untuk informasi lebih lanjut.

---
Dikembangkan oleh [username](https://github.com/username) 💻🚀

