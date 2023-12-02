import React from "react";

const Poster = ({ img }) => {
  return (
    <div className="hero_poster">
      <img
        src={`http://coderali.khamidmk.beget.tech/public/storage/carousels/${img}`}
        alt="hero_logo"
        className="hero_logo"
      />
    </div>
  );
};

export default Poster;
