import React from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <ul className="list">
        <li>
          <a
            href="#"
            className="link active"
            onClick={() => scrollToSection("homeSection")}>
            {t("Home")}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="link"
            onClick={() => scrollToSection("filterSection")}>
            {t("Menu")}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="link"
            onClick={() => scrollToSection("deliverySection")}>
            {t("Contacts")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
