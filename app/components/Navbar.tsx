"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center lg:justify-center px-4 py-3">
        {/* Логотип */}
        <div className="flex-shrink-0 lg:hidden">
          <img src="img/logo2.svg" alt="Logo" className="w-32 md:w-40" />
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
          {/* Ссылки */}
          <Link
            href="/"
            className="block text-white text-lg py-2 lg:py-0 relative group"
          >
            Главная
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about-company"
            className="block text-white text-lg py-2 lg:py-0 relative group"
          >
            О компании
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contacts"
            className="block text-white text-lg py-2 lg:py-0 relative group"
          >
            Контакты
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Кнопка */}
          <Link href="/consultation">
            <button className="block border-2 border-white px-4 py-2 hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300 rounded-md text-white mt-2 lg:mt-0">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
