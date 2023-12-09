import axios from "axios";
import React, { useEffect, useState } from "react";

const FilterList = ({ categories, setCategories }) => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/categories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  function handleScroll() {
    if ((window.scrollY > 600, window.scrollY < 1260)) {
      setSelectedCategory(0);
    } else if ((window.scrollY > 1130, window.scrollY < 1800)) {
      // console.log(window.scrollY > 1130);
      setSelectedCategory(1);
    } else if ((window.scrollY > 1800, window.scrollY < 2350)) {
      setSelectedCategory(2);
    } else if (window.scrollY > 2350) {
      setSelectedCategory(3);
    }

    // console.log(window.scrollY);
  }

  // Attach the scroll event listener to the window
  window.addEventListener("scroll", handleScroll);

  const handleCategoryClick = (categoryId) => {
    if (categoryId == 0) {
      window.scrollTo({
        top: 750,
        behavior: "smooth",
      });
      setSelectedCategory(categoryId);
    } else if (categoryId == 1) {
      window.scrollTo({
        top: 1270,
        behavior: "smooth",
      });
      setSelectedCategory(categoryId);
    } else if (categoryId == 2) {
      window.scrollTo({
        top: 1800,
        behavior: "smooth",
      });
      setSelectedCategory(categoryId);
    } else {
      window.scrollTo({
        top: 1800 + 550,
        behavior: "smooth",
      });
      setSelectedCategory(categoryId);
    }
  };

  return (
    <ul className="filter_list">
      {categories.map((item, id) => (
        <li
          className={`filter_item ${
            selectedCategory == `${id}` ? "selected" : ""
          }`}
          key={item.id}
          onClick={() => handleCategoryClick(id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
