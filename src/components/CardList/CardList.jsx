import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "./Card/Card";

const CardList = ({ products, setProducts, setOriginalProducts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://coderali.khamidmk.beget.tech/public/api/products"
        );

        setProducts(response.data);
        setOriginalProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content_block container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="content_list">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardList;
