import React, { useState } from "react";
import "./filter.css";

import FilterList from "./FilterList/FilterList";
import Button from "../Button/Button";

import { useSelector } from "react-redux";

const Filter = ({
  handleClick,
  categories,
  setCategories,
  filterProducts,
  selectedCategory,
}) => {
  const [navbar, setNavbar] = useState(false);
  const { totalPrice } = useSelector((state) => state.cart);

  window.onscroll = () => {
    if (window.scrollY >= "650") {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div className="filter" id="filterSection">
      <div className={`filter_block ${navbar ? "FilterActive" : ""}`}>
        <FilterList
          categories={categories}
          setCategories={setCategories}
          filterProducts={filterProducts}
          selectedCategory={selectedCategory}
        />
        <Button className="filter_cart" onClick={handleClick}>
          <img src="/images/basket.svg" alt="" />
          {totalPrice}
        </Button>
      </div>
    </div>
  );
};

export default Filter;
