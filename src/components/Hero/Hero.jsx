import React, { useEffect, useState } from "react";
import "./hero.css";
import Poster from "../Sale/Poster/Poster";
import Sale from "../Sale/Sale";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import axios from "axios";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/carousels");

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
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {carousels.map((itm) => {
          return (
            <SwiperSlide key={itm.id}>
              <div className="hero_item container">
                <Sale {...itm} />
                <Poster img={itm.img} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;
