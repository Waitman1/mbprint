import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-black text-white py-6 lg:block hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-6  ">
          {/* Логотип */}
          <div className="flex-shrink-0 ">
            <img src="/img/logo2.svg" alt="Logo" className="w-32 md:w-40" />
          </div>

          {/* Адрес */}
          <div className="text-center md:text-left hidden lg:block">
            <p className="text-base sm:text-lg">
              Посетите наше производство в Москве:
              <br /> 125252 г. Москва, ул. Зорге 15
            </p>
          </div>

          {/* Контактный телефон */}
          <div className="text-center md:text-right hidden lg:block">
            <p className="text-base sm:text-lg">
              Телефон:
              <br />
              <a href="tel:+74993506425" className="underline">
                +7 (499) 350-64-25
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
