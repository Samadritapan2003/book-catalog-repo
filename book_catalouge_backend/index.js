const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ Add this line
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = process.env.PORT || 5004;

const mongoURI = "mongodb+srv://samUser:sam%402003@cluster0.k7sfgzy.mongodb.net/book_catalog?retryWrites=true&w=majority&appName=Cluster0";

// ✅ Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Use CORS
app.use(cors({
  origin: "*", // You can also replace "*" with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// ✅ Parse JSON
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