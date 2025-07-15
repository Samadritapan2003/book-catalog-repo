// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Bookshelf from "./pages/Bookshelf";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  );
};

export default App;