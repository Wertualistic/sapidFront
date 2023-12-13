import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Basket.css";
import ruImage from "../../assets/images/ru.svg";
import uzImage from "../../assets/images/uz.png";
import enImage from "../../assets/images/en.png";
import { useTranslation } from "react-i18next";

const Basket = ({ handleClick }) => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("ru");
  const [langOpen, setLangOpen] = useState(false);
  const { totalPrice } = useSelector((state) => state.cart);
  const selectedLang = localStorage.getItem("lang") || "ru"; // Default to 'ru' if not set

  const handleLangChange = (lang) => {
    setLang(lang);
    setLangOpen(false);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="actions">
      <div className="cart" onClick={handleClick}>
        <img src="/images/basket.svg" alt="" />
        {parseInt(totalPrice) === 0 ? t("Cart") : parseInt(totalPrice) + t("Sum")}
      </div>
      <div className="language">
        <button onClick={() => setLangOpen(!langOpen)}>
          <img
            src={
              selectedLang === "ru"
                ? ruImage
                : selectedLang === "uz"
                ? uzImage
                : enImage
            }
            alt={selectedLang}
          />
        </button>
        <div className={`lang_dropdown ${langOpen ? "active" : ""}`}>
          <a href="/" onClick={() => handleLangChange("ru")}>
            <img src={ruImage} alt="ru" />
          </a>
          <a href="/" onClick={() => handleLangChange("en")}>
            <img src={enImage} alt="en" />
          </a>
          <a href="/" onClick={() => handleLangChange("uz")}>
            <img src={uzImage} alt="uz" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Basket;
