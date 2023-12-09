import React from "react";
import { useSelector } from "react-redux";
import "./Basket.css";

const Basket = ({ handleClick }) => {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="actions">
      <div className="cart" onClick={handleClick}>
        <img src="/images/basket.svg" alt="" />
        {parseInt(totalPrice) == "0" ? "Корзина" : parseInt(totalPrice)} sum
      </div>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default Basket;
