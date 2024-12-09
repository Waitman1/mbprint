import React, { FC } from "react";
import FlipCard from "./FlipCard";

const Professionals: FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black flex flex-col items-center">
      <h3 className="text-3xl font-bold mb-4 text-white ">20 ПРОФЕССИОНАЛОВ</h3>
      <p className="text-lg leading-relaxed text-white">
        В команде MBPRINT 20 профессиональных сотрудников, умеющих следовать
        самым передовым технологиям. Мы гордимся нашей командой и
        производственной дисциплиной.
      </p>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <FlipCard
          frontText="Передняя сторона"
          backText="Задняя сторона"
          imageUrl="img/developer1.jpg"
        />
      </div>
    </div>
  );
};

export default Professionals;
