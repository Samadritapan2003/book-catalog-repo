// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Bookshelf from "./pages/Bookshelf.jsx"; // ✅ newly renamed

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  </BrowserRouter>
);