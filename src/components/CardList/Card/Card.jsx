import React, { useState } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusItem, plusItem } from "../../../store/cartSlice";

const Card = ({
  id,
  img_url,
  title,
  price,
  desc,
  count,
  discounted_price,
  discount,
}) => {
  const dispatch = useDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const onClickAdd = () => {
    dispatch(
      addToCart({
        id,
        img_url,
        title,
        price,
        discount,
        discounted_price,
        desc,
        count,
      })
    );
    setIsAddedToCart(true);
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickPlus = () => {
    dispatch(plusItem(id));
  };

  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === id);
  // ну тут соответственно можно разделить на множество компонентов
  return (
    <li className="content_item">
      {discount == "0" ? null : <div className="discount">- {discount}%</div>}
      <div
        className="card_image"
        onClick={onClickAdd}
        style={{ cursor: "pointer" }}>
        <img src={img_url} alt="" style={{ width: "270px", height: "200px" }} />
      </div>
      <div className="card_content">
        <h2 className="content_title">{title}</h2>
        <p className="content_text">{desc}</p>
        <div className="content_actions">
          {isInCart ? (
            <div className="content_counter">
              <button className="counter_minus" onClick={onClickMinus}>
                <img src="/images/-.svg" alt="" />
              </button>
              <span className="counter_span">
                {addedCount > 0 && <i>{addedCount}</i>}
              </span>
              <button className="counter_plus" onClick={onClickPlus}>
                <img src="/images/+.svg" alt="" />
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "41px", alignItems: "center" }}>
              <div className="content_wrap">
                <span className="content_price">
                  {parseInt(discounted_price)} сум
                </span>
                {discount == "0" ? null : (
                  <span className="content_oldprice">{price} сум</span>
                )}
              </div>
              <button className="content_cart" onClick={onClickAdd}>
                В корзинку
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
