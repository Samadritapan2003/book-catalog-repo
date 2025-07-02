const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes"); // Your route file

const app = express();
const PORT = process.env.PORT || 5004;

// ✅ Replace <db_password> with your real password
const mongoURI = "mongodb+srv://samUser:sam%402003@cluster0.k7sfgzy.mongodb.net/book_catalog?retryWrites=true&w=majority&appName=Cluster0";

// 🔗 Connect to MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Routes
app.use("/api/books", bookRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("📚 Welcome to the Book Catalog API!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});