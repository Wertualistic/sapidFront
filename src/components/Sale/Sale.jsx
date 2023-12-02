import React from "react";
import Button from "../Button/Button";

const Sale = ({ title, desc }) => {
  return (
    <div className="hero_wrap">
      <div>
        <h1 className="hero_title">{title}</h1>
        <p className="hero_description">{desc}</p>
      </div>

      <Button className="hero_link">В меню</Button>
    </div>
  );
};

export default Sale;
