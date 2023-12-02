import axios from "axios";
import React, { useEffect } from "react";

const FilterList = ({
  categories,
  setCategories,
  filterProducts,
  selectedCategory,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://coderali.khamidmk.beget.tech/public/api/categories"
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ul className="filter_list">
      <li
        className={`filter_item ${selectedCategory == 0 ? "selected" : ""}`}
        onClick={() => filterProducts(0)}>
        Все
      </li>
      {categories.map((item) => (
        <li
          className={`filter_item ${
            selectedCategory == item.id ? "selected" : ""
          }`}
          onClick={() => filterProducts(item.id)}
          key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
