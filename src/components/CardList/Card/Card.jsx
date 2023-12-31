import React, { useEffect, useState } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, minusItem, plusItem } from "../../../store/cartSlice";
import { useTranslation } from "react-i18next";

const Card = ({
  id,
  img_url,
  title_uz,
  title_ru,
  title_en,
  price,
  desc_uz,
  desc_ru,
  desc_en,
  count,
  discounted_price,
  discount,
}) => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");

  const dispatch = useDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  const onClickAdd = () => {
    dispatch(
      addToCart({
        id,
        img_url,
        title_uz,
        title_en,
        title_ru,
        price,
        discount,
        discounted_price: discounted_price * exchangeRate,
        desc_uz,
        desc_en,
        desc_ru,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e6c187b0368a4afab36ecb96a06872cd"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.json();
        setExchangeRate(data.rates.UZS); // Assuming the UZS exchange rate is available in the response
      } catch (error) {
        console.error("Error fetching exchange rates:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <li className="content_item" data-aos="fade-up-right">
      {discount == "0" ? null : <div className="discount">- {discount}%</div>}
      <div
        className="card_image"
        onClick={onClickAdd}
        style={{ cursor: "pointer" }}>
        <img src={img_url} alt="" />
      </div>
      <div className="card_content">
        <h2 className="content_title">
          {lang === "uz" ? title_uz : lang === "ru" ? title_ru : title_en}
        </h2>
        <p className="content_text">
          {lang === "uz" ? desc_uz : lang === "ru" ? desc_ru : desc_en}
        </p>
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
            <div className="actions_content">
              <div className="content_wrap">
                <span className="content_price">
                  {parseInt(discounted_price * exchangeRate)} {t("Sum")}
                </span>
                {discount == "0" ? null : (
                  <span className="content_oldprice">
                    {parseInt(price * exchangeRate)} {t("Sum")}
                  </span>
                )}
              </div>
              <button className="content_cart" onClick={onClickAdd}>
                {t('AddToCart')}
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
