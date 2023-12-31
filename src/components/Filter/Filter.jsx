import React, { useState } from "react";
import "./filter.css";

import FilterList from "./FilterList/FilterList";
import Button from "../Button/Button";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Filter = ({
  handleClick,
  categories,
  setCategories,
  filterProducts,
  selectedCategory,
}) => {
  const { t } = useTranslation();
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="filter" id="filterSection">
      <div className="filter_block container">
        <FilterList
          categories={categories}
          setCategories={setCategories}
          filterProducts={filterProducts}
          selectedCategory={selectedCategory}
        />
        <Button className="filter_cart" onClick={handleClick}>
          <img src="/images/basket.svg" alt="" />
          <p>{parseInt(totalPrice)} {t("Sum")}</p>
        </Button>
      </div>
    </div>
  );
};

export default Filter;
