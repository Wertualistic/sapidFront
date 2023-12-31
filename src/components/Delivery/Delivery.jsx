import React from "react";
import "./delivery.css";
import bike from "../../assets/images/bike.png";

import Title from "../Title/Title";
import Accordion from "../Accordion/Accordion";

const Delivery = () => {
  return (
    <section className="delivery" id="deliverySection">
      <div className="delivery_block container " data-aos="zoom-in-down">
        <div data-aos="fade-down">
          <Title />
        </div>
        <div className="delivery_content">
          <div className="delivery_wrap">
            <div style={{ width: "100%" }} data-aos="zoom-in">
              <Accordion />
            </div>
            <div className="delivery_img" data-aos="fade-left">
              <img src={bike} alt="" />
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.1174973513534!2d69.20067716125628!3d41.35660204438536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d88bc70f0b9%3A0xb01a0158a3a86e7c!2sINNO%20Innovative%20Training%20and%20Production%20Technopark!5e1!3m2!1suz!2s!4v1702443972908!5m2!1suz!2s"
            width="100%"
            height="450"
            style={{ border: "none", marginTop: "50px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
