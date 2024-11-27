import logo from "../../public/img/logo2.svg";

import Image from "next/image";

import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-black  text-white py-6  items-center justify-center flex ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto  px-20 ">
          <div className="flex justify-between items-center ">
            <Image src={logo} alt="Logo" />
            <p className="w-[300px] text-lg">
              Посетите наше производство в Москве: 125252 г. Москва, ул. Зорге
              15
            </p>
            <p className="w-[200px] text-lg">
              Телефон:
              <br /> +7 (499) 350-64-25
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
