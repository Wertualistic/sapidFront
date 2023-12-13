import React from "react";

const Poster = ({ img }) => {
  return (
    <div className="hero_poster" data-aos="fade-left">
      <img
        src={`http://127.0.0.1:8000/storage/carousels/${img}`}
        alt="hero_logo"
        className="hero_logo"
      />
    </div>
  );
};

export default Poster;
