const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Dummy Book Database
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    publishedYear: 2018,
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publishedYear: 1988,
  },
];

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("Hello, Book Catalog!");
});

// ✅ GET all books
app.get("/books", (req, res) => {
  console.log("get request received");
  res.json(books);
});

// ✅ POST a new book
app.post("/books", (req, res) => {
  const { title, author, genre, publishedYear } = req.body;

  if (!title || !author || !genre || !publishedYear) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre,
    publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  console.log("📥 PUT request received"); // confirm request aschhe kina
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({ error: "Book not found!" });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});