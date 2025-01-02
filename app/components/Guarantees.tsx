import Link from "next/link";
import React, { FC } from "react";

const Guarantees: FC = () => {
  return (
    <div>
      {/* Параллакс секция */}
      <div className="h-[400px] sm:h-[500px] lg:h-[600px] bg-fixed bg-center bg-cover bg-[url('/img/bg-down-mine.jpg')] flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
            Испытайте наши гарантии в деле
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl">
            Оставьте заявку, чтобы получить коммерческое предложение на пилотный
            проект
          </p>
          <Link href="/consultation">
            <button className="px-4 sm:px-6 py-3 sm:py-4 mt-8 lg:mt-10 uppercase text-md sm:text-lg bg-white text-black font-medium rounded hover:bg-gray-200 transition-transform">
              Оставить заявку
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guarantees;
