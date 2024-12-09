"use client";

import React, { FC, useState } from "react";

const BlogAboutCompany: FC = () => {
  const [currentBlock, setCurrentBlock] = useState("block1");

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row max-w-max  mx-auto container">
        {/* Блок с изображением */}
        <div className="w-full lg:w-1/2">
          <img
            src="/img/tipographia3.jpg"
            alt="Фото типографии"
            className="w-full h-auto object-cover"
            width={1000}
            height={0}
          />
        </div>
        {/* Блок с текстом */}
        <div className="w-full lg:w-1/2 bg-purple flex items-center">
          <div className="px-6 py-8 lg:px-8 lg:py-12 text-center lg:text-left">
            <p className="text-sm sm:text-base text-white uppercase mb-2">
              [ о компании ]
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              Основной принцип работы — делаем то, что другие считают
              невозможным
            </h3>
            {/* Кнопки для переключения */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
              <button
                onClick={() => setCurrentBlock("block1")}
                className={`px-4 py-2 uppercase border-b-2 ${
                  currentBlock === "block1"
                    ? "border-white text-white"
                    : "border-transparent text-gray-300 hover:text-white"
                }`}
              >
                принципы
              </button>
              <button
                onClick={() => setCurrentBlock("block2")}
                className={`px-4 py-2 uppercase border-b-2 ${
                  currentBlock === "block2"
                    ? "border-white text-white"
                    : "border-transparent text-gray-300 hover:text-white"
                }`}
              >
                показатели
              </button>
              <button
                onClick={() => setCurrentBlock("block3")}
                className={`px-4 py-2 uppercase border-b-2 ${
                  currentBlock === "block3"
                    ? "border-white text-white"
                    : "border-transparent text-gray-300 hover:text-white"
                }`}
              >
                история
              </button>
            </div>
            {/* Тексты под кнопками */}
            <div className="text-white">
              {currentBlock === "block1" && (
                <div>
                  <p className="text-base sm:text-lg mb-4">
                    Мы выработали принципы работы, внедрили сервисный подход и
                    наладили производство таким образом, что выполняем задачи,
                    которые другие не могут выполнить. MBPRINT это:
                  </p>
                  <ul>
                    {[
                      "Максимальная оперативность",
                      "Высокое качество",
                      "Сбалансированная стоимость",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center mb-4">
                        <img
                          src="/img/check.svg"
                          width={20}
                          height={20}
                          alt="галочка"
                        />
                        <span className="ml-4 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {currentBlock === "block2" && (
                <div>
                  <p className="text-base sm:text-lg mb-4">
                    MBPRINT предоставляет 5 видов гарантий нашим клиентам. В
                    основе нашей уверенности – опыт, компетенция, инвестиции и
                    прекрасная команда.
                  </p>
                  <ul>
                    {[
                      "7 лет среднее время сотрудничества с заказчиком",
                      "25000 выполненных проектов",
                      "20 лет опыта работы в сфере полиграфии",
                      "2 млн $ вложено в оборудование для печати",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center mb-4">
                        <img
                          src="/img/check.svg"
                          width={20}
                          height={20}
                          alt="галочка"
                        />
                        <span className="ml-4 text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {currentBlock === "block3" && (
                <div>
                  <p className="text-base sm:text-lg mb-4">
                    Сергей Морозов и Алексей Горохов основали MBPRINT в декабре
                    1997 года. Они выбрали рекламную полиграфию как основной вид
                    деятельности...
                  </p>
                  <ul>
                    <li className="flex items-center mb-4">
                      <img
                        src="/img/check.svg"
                        width={20}
                        height={20}
                        alt="галочка"
                      />
                      <span className="ml-4 text-base">
                        ...2021 в типографии начала работу листовая цифровая
                        печатная машина Konica Minolta AccurioPress C12000.
                        Установка комплекта оборудования для изготовления
                        твёрдого переплёта Schmedt...
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAboutCompany;
