// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import bookshelfImage from "../assets/bookshelf.png";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-gradient-to-br from-[#fceabb] to-[#e3f0d3]">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
          your personal library,<br />
          just smarter
        </h1>
        <Link
          to="/bookshelf"
          className="inline-block text-lg text-blue-700 font-semibold hover:underline transition"
        >
          View the shelves →
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src={bookshelfImage}
          alt="Bookshelf illustration"
          className="w-64 md:w-80 object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Landing;