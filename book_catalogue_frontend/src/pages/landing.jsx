import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      {/* Headline and call to action */}
      <div
        style={{
          maxWidth: '36rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 className="landing-headline">
          Your personal library,
          <br />
          just smarter — <strong>Shelfy</strong>
        </h1>
        <p className="landing-description">
          Keep track of the books you love in a simple, elegant catalogue. Add,
          organise and review your reads all in one place.
        </p>
        <Link to="/bookshelf" className="btn-primary">
          View your shelf
        </Link>
      </div>
    </div>
  );
};

export default Landing;