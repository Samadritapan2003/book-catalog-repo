// src/pages/Bookshelf.jsx
import React, { useEffect, useState } from "react";
import API from "../services/api";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    publishedYear: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [editId, setEditId] = useState(null);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [confirmDelete, setConfirmDelete] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      let data = res.data;

      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        data = data.filter(
          (book) =>
            book.title.toLowerCase().includes(q) ||
            book.author.toLowerCase().includes(q)
        );
      }

      data.sort((a, b) =>
        sortOrder === "asc"
          ? a.publishedYear - b.publishedYear
          : b.publishedYear - a.publishedYear
      );

      setBooks(data);
    } catch (err) {
      showToast("Failed to fetch books", "error");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery, sortOrder]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (editId) {
        await API.put(`/books/${editId}`, form);
        showToast("Book updated successfully", "success");
        setEditId(null);
      } else {
        await API.post("/books", form);
        showToast("Book added successfully", "success");
      }
      setForm({ title: "", author: "", description: "", publishedYear: "" });
      fetchBooks();
    } catch {
      showToast("Failed to add/update book", "error");
    }
  };

  const handleEdit = (book) => {
    setForm(book);
    setEditId(book._id);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/books/${id}`);
      showToast("Book deleted", "success");
      fetchBooks();
    } catch {
      showToast("Failed to delete", "error");
    }
    setConfirmDelete(null);
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  return (
    <div className="bookshelf-wrapper">
      <div className="bookshelf-container">
        <h1 className="bookshelf-title">
          <span role="img" aria-label="books">📚</span>
          Book Catalog
        </h1>
        {/* Search & sort controls */}
        <div className="search-sort-group">
          <input
            type="text"
            placeholder="Search by title or author"
            className="input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Year ↑</option>
            <option value="desc">Year ↓</option>
          </select>
        </div>
        {/* Book form */}
        <div className="form-grid">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input"
            value={form.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="input"
            value={form.author}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input"
            value={form.description}
            onChange={handleChange}
          />
          <input
            type="number"
            name="publishedYear"
            placeholder="Published Year"
            className="input"
            value={form.publishedYear}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-add">
            {editId ? "Update Book" : "Add Book"}
          </button>
        </div>
        {/* Book list */}
        <ul>
          {books.map((book) => (
            <li key={book._id} className="card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <h2 className="card-title">{book.title}</h2>
                  <p className="card-meta">✍️ {book.author}</p>
                  <p className="card-meta">📝 {book.description}</p>
                  <p className="card-meta">📅 {book.publishedYear}</p>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => handleEdit(book)}
                    className="btn btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setConfirmDelete(book._id)}
                    className="btn btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Confirm delete modal */}
      {confirmDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <p style={{ marginBottom: "1rem" }}>
              Are you sure you want to delete this book?
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="btn btn-delete"
              >
                Yes
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="btn"
                style={{ backgroundColor: "var(--border-color)", color: "var(--text-color)" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toast */}
      {toast.show && (
        <div
          className={`toast ${toast.type === "success" ? "toast-success" : "toast-error"}`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default Bookshelf;