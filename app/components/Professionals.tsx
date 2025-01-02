"use client";
import React, { FC } from "react";
import FlipCard from "./FlipCard";

const Professionals: FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black py-20">
      {/* Заголовок */}
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-8 mb-4 text-center text-white">
        20 ПРОФЕССИОНАЛОВ
      </h3>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-center text-white pb-8 sm:pb-10 lg:pb-12">
        В команде MBPRINT 20 профессиональных сотрудников, умеющих следовать
        самым передовым технологиям. Мы гордимся нашей командой и
        производственной дисциплиной.
      </p>

      {/* Карточки сотрудников */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <FlipCard
          imageUrl="/mbprint/img/MBprint-Morozov-1.jpg" // Замените на свою фотографию
          frontText="Сергей Морозов"
          backText="Cовладелец MB Print. Опыт работы более двадцати лет в сфере полиграфии и издательского дела"
        />
        <FlipCard
          imageUrl="/mbprint/img/MBprint-Gorohov-1.jpg" // Замените на свою фотографию
          frontText="Алексей Горохов"
          backText="Cовладелец MB Print. Опыт работы более двадцати лет в сфере полиграфии и издательского дела"
        />
      </div>
    </div>
  );
};

export default Professionals;
