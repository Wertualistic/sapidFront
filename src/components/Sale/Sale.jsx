import React from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Sale = ({ title_uz, title_ru, title_en, desc_uz, desc_ru, desc_en }) => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");

  return (
    <div className="hero_wrap" data-aos="fade-right">
      <div>
        <h1 className="hero_title">
          {lang === "uz" ? title_uz : lang === "ru" ? title_ru : title_en}
        </h1>
        <p className="hero_description">
          {lang === "uz" ? desc_uz : lang === "ru" ? desc_ru : desc_en}
        </p>
      </div>

      <Button className="hero_link">{t("Menu")}</Button>
    </div>
  );
};

export default Sale;
