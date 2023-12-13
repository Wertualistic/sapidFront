import React from "react";
import "./footer.css";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_block container">
          <Logo />
          <ul className="footer_list">
            <li
              className="footer_item"
              onClick={() => scrollToSection("homeSection")}>
              {t("Home")}
            </li>
            <li
              className="footer_item"
              onClick={() => scrollToSection("filterSection")}>
              {t("Menu")}
            </li>
            <li
              className="footer_item active"
              onClick={() => scrollToSection("deliverySection")}>
              {t("Contacts")}
            </li>
          </ul>
          <div id="google_translate_element"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_block container">
          <span className="footer_copyright">
            Copyright © 2023 Muhammad Ali
          </span>
          <button onClick={() => scrollToSection("homeSection")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none">
              <path
                d="M17.5 9L9.5 1L1.5 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="footer_text">
            Site created <span>My Career Interns</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
