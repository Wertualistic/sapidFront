import React, { useState, useEffect } from "react";
import loader from "../../assets/loader.gif";

import axios from "axios";
import Card from "./Card/Card";

const CardList = ({ products, setProducts, setOriginalProducts }) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);

  const apiUrlCategories = "http://127.0.0.1:8000/api/categories";

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
      .get("http://127.0.0.1:8000/api/products")
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
                  >
                  <div className="content__top" id={`section${category.id}`}>
                    <h2>{category.name}</h2>
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
