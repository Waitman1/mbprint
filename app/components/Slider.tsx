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
      image: "img/slider-1.jpg",
    },
    { id: 2, title: "Печать книг премиум класса", image: "img/slider-2.jpg" },
    {
      id: 3,
      title: "Эксклюзивные печатные материалы для бизнеса",
      image: "img/slider-3.jpg",
    },
    {
      id: 4,
      title: "Типография полного цикла",
      image: "img/slider4.jpg",
    },
    {
      id: 5,
      title: "Печать книг премиум класса",
      image: "img/slider5.jpg",
    },
    {
      id: 6,
      title: "Эксклюзивные печатные материалы для бизнеса",
      image: "img/slider6.jpg",
    },
  ];

  return (
    <div className="max-w-screen  mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative text-center">
              {/* Изображение */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[200px] md:h-[300px] lg:h-[480px] object-cover"
              />
              {/* Текст */}
              <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white  text-lg md:text-2xl lg:text-4xl px-4 py-4">
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
