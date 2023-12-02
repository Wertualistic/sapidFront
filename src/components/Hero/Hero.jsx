import React, { useEffect, useState } from "react";
import "./hero.css";
import Poster from "../Sale/Poster/Poster";
import Sale from "../Sale/Sale";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import axios from "axios";

const Hero = () => {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://coderali.khamidmk.beget.tech/public/api/carousels"
        );

        setCarousels(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="hero">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        {carousels.map((itm) => (
          <SwiperSlide>
            <div className="hero_item container">
              <Sale {...itm} />
              <Poster img={itm.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
