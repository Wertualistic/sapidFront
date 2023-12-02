import React from "react";
import "./delivery.css";
import bike from "../../assets/images/bike.png";

import Title from "../Title/Title";
import Accordion from "../Accordion/Accordion";

const Delivery = () => {
  return (
    <section className="delivery" id="deliverySection">
      <div className="delivery_block container">
        <Title />
        <div className="delivery_wrap">
          <Accordion />
          <div className="delivery_img">
            <img src={bike} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
