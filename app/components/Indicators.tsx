"use client";

import React, { FC } from "react";
import AnimatedNumber from "./AnimatedNumber";
import Image from "next/image";

const Indicators: FC = () => {
  return (
    <div className="container mx-auto bg-bg  min-h-screen flex flex-col items-center">
      {/* Фон с текстом */}
      <div
        className="relative w-full text-center bg-cover bg-center bg-no-repeat bg-black/50 py-20"
        style={{ backgroundImage: "url('/mbprint/img/mbprint-history-2.jpg')" }}
      >
        <p className="text-grey uppercase font-bold tracking-wide">
          [ больше, чем типография ]
        </p>
        <h4 className="text-2xl sm:text-3xl font-bold uppercase text-black">
          ПОКАЗАТЕЛИ
        </h4>
        <p className="text-base sm:text-lg lg:text-xl mt-6 text-black px-4">
          Мы предоставляем 5 видов гарантий нашим клиентам. В основе нашей
          уверенности – опыт, компетенция, инвестиции и прекрасная команда.
        </p>

        {/* Блок показателей */}
        <div className="flex flex-wrap justify-center gap-8 py-16">
          {/* Среднее время сотрудничества */}
          <div className="text-center">
            <AnimatedNumber endValue={7} duration={2000} unit=" лет" />
            <div className="mt-2 text-sm sm:text-base text-black">
              Среднее время сотрудничества с заказчиком
            </div>
          </div>

          {/* Выполненные проекты */}
          <div className="text-center">
            <AnimatedNumber endValue={30000} duration={2500} unit="+" />
            <div className="mt-2 text-sm sm:text-base text-black">
              Выполненных проектов
            </div>
          </div>

          {/* Опыт работы */}
          <div className="text-center">
            <AnimatedNumber endValue={27} duration={3000} unit=" лет" />
            <div className="mt-2 text-sm sm:text-base text-black">
              Опыт работы в сфере полиграфии
            </div>
          </div>

          {/* Вложения в оборудование */}
          <div className="text-center">
            <AnimatedNumber endValue={2} duration={1500} unit=" млн $" />
            <div className="mt-2 text-sm sm:text-base text-black">
              Вложено в оборудование для печати
            </div>
          </div>
        </div>
      </div>

      {/* Изображение ниже текста */}
      <div className="bg-bg">
        <Image
          src="/mbprint/img/technologi.png"
          width={1000}
          height={1000}
          alt="Технологии"
          className="w-full max-w-3xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Indicators;
