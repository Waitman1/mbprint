"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/img/logo2.svg"; // Иконки из react-icons

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="container mx-auto flex items-center lg:justify-center px-4 py-3">
        {/* Логотип или Название */}
        <div className="flex-shrink-0 lg:hidden">
          <Image src={logo} alt="Logo" className="w-32 md:w-40" />
        </div>

        {/* Кнопка бургер */}
        <button
          className="lg:hidden text-white text-2xl fixed top-4 right-4 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Основное меню */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-10 absolute lg:static top-0 right-0 bg-black w-full lg:w-auto h-screen lg:h-auto px-6 py-8 lg:p-0`}
        >
          <Link
            href="/"
            className="block text-white hover:underline text-lg py-2 lg:py-0"
          >
            Главная
          </Link>
          <Link
            href="/about-company"
            className="block text-white hover:underline text-lg py-2 lg:py-0"
          >
            О компании
          </Link>
          <Link
            href="/contacts"
            className="block text-white hover:underline text-lg py-2 lg:py-0"
          >
            Контакты
          </Link>
          <button className="block border-2 border-white px-4 py-2 hover:bg-white hover:text-black rounded-md text-white mt-2 lg:mt-0">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
