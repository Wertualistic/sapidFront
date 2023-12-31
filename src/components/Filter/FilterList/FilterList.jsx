import axios from "axios";
import React, { useEffect, useState } from "react";

const FilterList = ({ categories, setCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://coderadd.beget.tech/public/api/categories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  // function handleScroll() {
  //   if ((window.scrollY > 320, window.scrollY < 1200)) {
  //     setSelectedCategory(0);
  //   } else if ((window.scrollY > 1200, window.scrollY < 1420)) {
  //     setSelectedCategory(1);
  //   } else if ((window.scrollY > 1420, window.scrollY < 1970)) {
  //     setSelectedCategory(2);
  //   } else if (window.scrollY > 1970) {
  //     setSelectedCategory(3);
  //   }
  // }

  // // Attach the scroll event listener to the window
  // window.addEventListener("scroll", handleScroll);

  // const handleCategoryClick = (index) => {
  //   const scrollToPosition = 460 + index * 620 + 270;
  //   setSelectedCategory(selectedCategory === -1 ? index : index);
  //   window.scrollTo(0, scrollToPosition);
  // };

  return (
    <ul className="filter_list nav nav-pills" id="navbar-example2">
      {categories.map((item) => (
        <li
          key={item.id}
          /* onClick={() => handleCategoryClick(id)} */
        >
          <a
            className={`nav-link filter_item ${
              selectedCategory == `${item.name_en}` ? "selected" : ""
            }`}
            href={`#${item.name_en}`}
            onClick={() => setSelectedCategory(item.name_en)}>
            {lang === "uz"
              ? item.name_uz
              : lang === "ru"
              ? item.name_ru
              : item.name_en}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
