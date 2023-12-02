import React, { useState } from "react";
import "./drawer.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  minusItem,
  removeAll,
  removeFromCart,
} from "../../store/cartSlice";
import Button from "../Button/Button";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Drawer = ({ onClose, opened }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.cartItems);
  const { totalPrice } = useSelector((state) => state.cart);

  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const success = () => toast.success("Your order was successfully sent!");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const products = cartItems.map((item) => ({
      name: item.title,
      price: item.discounted_price,
      quantity: item.count,
    }));

    const postData = {
      name: formData.name,
      telephone: formData.telephone,
      address: formData.address,
      total_price: totalPrice,
      products: products,
    };

    try {
      const response = await axios.post(
        "http://coderali.khamidmk.beget.tech/public/api/orders",
        postData,
        {
          headers: {
            "Accept-Language": "ru",
          },
        }
      );

      console.log("Response:", response.data);

      setFormData({
        name: "",
        telephone: "",
        address: "",
        total_price: 0,
        products: [],
      });
      success();
      setModal(false);
      onClose();
      dispatch(removeAll());
    } catch (error) {
      console.error("Error:", error);
      console.log("Response Data:", error.response.data);
    }
  };

  const onRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const onClickPlus = (id) => {
    dispatch(addToCart({ id }));
  };

  const onClickMinus = (id) => {
    dispatch(minusItem(id));
  };

  return (
    <div className={`overlay ${opened ? "overlayVisible" : ""}`}>
      <div className={`drawer ${opened ? "active" : ""}`}>
        <h2 className="drawer_title">
          Корзина{" "}
          <img
            src="/images/close.svg"
            alt="close"
            className="close_icon"
            onClick={onClose}
          />
        </h2>

        {cartItems.length > 0 ? (
          <div style={{ marginTop: "30px", overflow: "auto" }}>
            {cartItems.map((item, index) => {
              return (
                <div className="cartItem" key={index}>
                  <img src={item.img_url} alt="" className="cartItem_logo" />
                  <div>
                    <h3 className="cartItem_title">{item.title}</h3>
                    <span className="cartItem_price">
                      {item.discounted_price} сум
                    </span>
                  </div>
                  <div>
                    <img
                      src="/images/delete.svg"
                      alt=""
                      className="cartItem_delete"
                      onClick={() => onRemove(item.id)}
                    />
                    {/* счетчик тоже отдельный комонент тк он у тебя и здесь и у карточек на странице */}
                    <div className="cartItem_counter">
                      <button
                        className="cartItem_minus"
                        onClick={() => onClickMinus(item.id)}>
                        <img src="/images/-.svg" alt="" />
                      </button>
                      <span className="cartItem_span">{item.count}</span>
                      <button
                        className="cartItem_plus"
                        onClick={() => onClickPlus(item.id)}>
                        <img src="/images/+.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="items">
              <div>
                <span>Всего :</span>
                <h3>{totalPrice} сум</h3>
              </div>
              <button className="items_link" onClick={() => setModal(true)}>
                Заказать
              </button>
            </div>
          </div>
        ) : (
          <div className="empty">
            <img src="/images/empty-cart.jpg" alt="" className="empty_logo" />
            <p className="empty_text">
              Ваша корзина пуста, откройте "Меню" <br /> и выберите
              понравившийся товар.
            </p>
            <button className="empty_btn" onClick={onClose}>
              Добавить в корзину
            </button>
          </div>
        )}
        <div className={`modal ${modal ? "active" : ""}`}>
          <div className={`sModal ${modal ? "active" : ""}`}>
            <div className="modal_content">
              <div className="modal_header">
                <h2>Заказать доставку</h2>
                <div onClick={() => setModal(false)} className="close_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none">
                    <rect
                      width="31.9357"
                      height="3.19357"
                      transform="matrix(0.707868 0.706344 -0.707868 0.706344 2.26068 0.186646)"
                      fill="#011B18"
                    />
                    <rect
                      width="31.9357"
                      height="3.19357"
                      transform="matrix(0.707868 -0.706344 0.707868 0.706344 0.133118 22.5576)"
                      fill="#011B18"
                    />
                  </svg>
                </div>
              </div>
              <div className="modal_body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя:"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="telephone"
                    placeholder="Телефон:"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Адрес:"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="modal_footer">
                    <div className="privacy">
                      <input type="checkbox" required />
                      <p>
                        By creating an account, you agree{" "}
                        <span>
                          to our <br /> Terms
                        </span>
                        of use and <span>Privacy Policy</span>
                      </p>
                    </div>
                    <Button type="submit" className={"modal_button"}>
                      Отправить
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
