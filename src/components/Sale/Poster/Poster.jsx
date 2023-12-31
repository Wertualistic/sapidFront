import React from "react";

const Poster = ({ img }) => {
  return (
    <div className="hero_poster" data-aos="fade-left">
      <img
        src={`http://coderadd.beget.tech/public/storage/carousels/${img}`}
        alt="hero_logo"
        className="hero_logo"
      />
    </div>
  );
};

export default Poster;
