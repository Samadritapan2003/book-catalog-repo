import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
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
      const res = await axios.get("http://localhost:5004/api/books");
      let data = res.data;

      // Filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        data = data.filter(
          (book) =>
            book.title.toLowerCase().includes(q) ||
            book.author.toLowerCase().includes(q)
        );
      }

      // Sort
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
        await axios.put(`http://localhost:5004/api/books/${editId}`, form);
        showToast("Book updated successfully", "success");
        setEditId(null);
      } else {
        await axios.post("http://localhost:5004/api/books", form);
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
      await axios.delete(`http://localhost:5004/api/books/${id}`);
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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Book Catalog</h1>

      {/* Search + Sort */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="🔍 Search by title or author"
          className="border p-2 rounded w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">📅 Year ↑</option>
          <option value="desc">📅 Year ↓</option>
        </select>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border p-2 rounded"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="border p-2 rounded"
          value={form.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="publishedYear"
          placeholder="Published Year"
          className="border p-2 rounded"
          value={form.publishedYear}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Book" : "Add Book"}
        </button>
      </div>

      {/* Book List */}
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book._id} className="border p-4 rounded shadow">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-lg">{book.title}</h2>
                <p>✍️ {book.author}</p>
                <p>📝 {book.description}</p>
                <p>📅 {book.publishedYear}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(book)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => setConfirmDelete(book._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Confirm Delete Modal */}
      {confirmDelete && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="mb-4">Are you sure you want to delete this book?</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="bg-gray-300 px-4 py-2 rounded"
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
          className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default App;