// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import bookshelfImage from "../assets/bookshelf.png";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gradient-to-r from-[#f2e8cf] to-[#dfd3c3]">
      {/* Left Text Area */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Your personal library, just smarter — <span className="text-purple-600">Shelfy</span>
        </h1>
        <Link
          to="/bookshelf"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          📚 View the Shelves
        </Link>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={bookshelfImage}
          alt="Bookshelf"
          className="w-64 md:w-96 max-w-full"
        />
      </div>
    </div>
  );
};

export default Landing;