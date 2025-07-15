// src/pages/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import bookshelf from "../assets/bookshelf.png"; // ✅ image from assets

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: "2rem",
        background: "linear-gradient(to right, #f2e8cf, #dfd3c3)",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#3e3e3e" }}>
          Your personal library, just smarter — <strong>Shelfy</strong>
        </h1>
        <Link
          to="/bookshelf"
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#6c63ff",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          📚 View the Shelves
        </Link>
      </div>
      <div>
        <img src={bookshelf} alt="Bookshelf" style={{ width: "350px" }} />
      </div>
    </div>
  );
};

export default Landing;