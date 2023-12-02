import React from "react";
import "./footer.css";

// аналогично можно поделить на пару компонентов еще
const Footer = () => {
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
          <img src="/images/logo.svg" alt="" className="footer_logo" />
          <ul className="footer_list">
            <li
              className="footer_item"
              onClick={() => scrollToSection("homeSection")}>
              Главная
            </li>
            <li
              className="footer_item"
              onClick={() => scrollToSection("filterSection")}>
              Меню
            </li>
            <li
              className="footer_item"
              onClick={() => scrollToSection("deliverySection")}>
              Контакты
            </li>
          </ul>
          <div className="footer_language">
            <img src="/images/icon_russia.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_block container">
          <span className="footer_copyright">Copyright © 2022 sapid</span>
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
            Сайт создан <span>Teamwork</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
