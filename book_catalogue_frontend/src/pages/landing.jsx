import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-10"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
        color: "#000000",
      }}
    >
      {/* Left Side - Text & Link */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-semibold">
          Your personal library, just smarter — <strong>Shelfy</strong>
        </h1>
        <Link
          to="/bookshelf"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded transition"
        >
          📚 View the Shelves
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3106/3106781.png"
          alt="Bookshelf illustration"
          className="w-80 h-auto"
        />
        <p className="text-xs mt-4 text-gray-500 text-center">
          <a
            href="https://www.flaticon.com/free-icons/bookshelf"
            title="bookshelf icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bookshelf icons created by prettycons - Flaticon
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;