
# 📬 Contact Form Submission Tracker - Node.js, Express & MongoDB

Welcome to **Day 9** of my **10 Days of Node.js/Express/MongoDB** challenge!  
This project is a **Contact Form Submission API** that allows users to submit messages and lets admins view all submissions. It includes basic route protection using JWT.

---

## 🚀 Features

- 📨 Submit a contact message
- 🕒 Automatically records submission time
- 🔐 Admin can view all contact messages
- 🔑 JWT-based route protection for admin access
- 🛠️ Clean and modular Express setup

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- dotenv

---

## 📁 Folder Structure

```
contact-form-api/
├── models/
│   └── ContactMessage.js
├── routes/
│   └── contactRoutes.js
├── middleware/
│   └── verifyToken.js
├── auth.js             # (for testing token generation)
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/contact-form-api.git
cd contact-form-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/contactFormDB
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. **Start the server**
```bash
npm run dev
```

App runs at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 📩 Submit a Contact Message

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| POST   | `/contact`    | Submit a contact message |

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Interested in your service!"
}
```

---

### 🔐 Admin Login (for testing)

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| POST   | `/admin/login`    | Get admin JWT token |

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

---

### 📂 Get All Messages (Admin only)

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | `/admin/messages`  | Get all submitted messages |

**Headers:**
```
Authorization: <admin_jwt_token>
```

**Response:**
```json
[
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Interested in your service!",
    "submittedAt": "2025-04-14T10:25:00.000Z"
  }
]
```

---

## 🧠 Learning Goals

- Working with timestamps in MongoDB
- Creating and securing admin-only routes with JWT
- Handling public form submissions
- Organizing Express routes and middlewares

---

## 🧪 Test with Postman

1. `POST /contact` to submit a message
2. `POST /admin/login` to get an auth token
3. Use the token to access `GET /admin/messages`

---

## 👨‍💻 Author

**Yogesh Shinde**  
📧 yogeshshinde3624@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/y0geshshinde)  
🐙 [GitHub](https://github.com/y0geshshinde)
