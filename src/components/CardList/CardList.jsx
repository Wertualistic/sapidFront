import React, { useState, useEffect } from "react";
import loader from "../../assets/loader.gif";

import axios from "axios";
import Card from "./Card/Card";

const CardList = ({ products, setProducts, setOriginalProducts }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const lang = localStorage.getItem("lang");

  const apiUrlCategories = "http://coderadd.beget.tech/public/api/categories";

  useEffect(() => {
    axios
      .get(apiUrlCategories)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://coderadd.beget.tech/public/api/products")
      .then((response) => {
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      ) : (
        <>
          <div className="content" id="menu">
            <div className="container">
              {categories.map((category) => (
                <div
                  className="content__inner"
                  key={category.id}
                  id={`${category.name_en}`}>
                  <div className="content__top">
                    <h2>
                      {lang === "uz"
                        ? category.name_uz
                        : lang === "ru"
                        ? category.name_ru
                        : category.name_en}
                    </h2>
                  </div>
                  <div className="content_list">
                    {cards
                      .filter((product) => product.category_id == category.id)
                      .map((product) => (
                        <Card {...product} key={product.id} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardList;
