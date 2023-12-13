import React from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Sale = ({ title, desc }) => {
  const { t } = useTranslation();

  return (
    <div className="hero_wrap" data-aos="fade-right">
      <div>
        <h1 className="hero_title">{title}</h1>
        <p className="hero_description">{desc}</p>
      </div>

      <Button className="hero_link">{t("Menu")}</Button>
    </div>
  );
};

export default Sale;
