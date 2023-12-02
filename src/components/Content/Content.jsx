import React from "react";

import CardList from "../CardList/CardList";

const Content = ({ products, setProducts, setOriginalProducts }) => {
  return (
    <section className="content">
      <CardList
        products={products}
        setProducts={setProducts}
        setOriginalProducts={setOriginalProducts}
      />
    </section>
  );
};

export default Content;
