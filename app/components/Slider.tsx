"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider: FC = () => {
  const slides = [
    {
      id: 1,
      title: "Типография полного цикла",
      image: "/img/slider-1.jpg",
    },
    { id: 2, title: "Печать книг премиум класса", image: "/img/slider-2.jpg" },
    {
      id: 3,
      title: "Эксклюзивные печатные материалы для бизнеса",
      image: "/img/slider-3.jpg",
    },
    ,
    {
      id: 4,
      title: "Типография полного цикла",
      image: "/img/slider4.jpg",
    },
    ,
    {
      id: 5,
      title: "Печать книг премиум класса",
      image: "/img/slider5.jpg",
    },
    ,
    {
      id: 6,
      title: "Эксклюзивные печатные материалы для бизнеса",
      image: "/img/slider6.jpg",
    },
  ];

  return (
    <div style={{ maxWidth: "max-content", margin: "0 auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Подключение модулей
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: "100%",
                }}
              />
              <h3
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  fontSize: "80px",
                  padding: "5px 10px",
                }}
              >
                {slide.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
