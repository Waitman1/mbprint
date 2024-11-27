import Link from "next/link";
import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className=" bg-black flex justify-center items-center py-3  sticky top-0 z-50">
      <Link href="/" className="hover:underline text-lg mr-20 text-white">
        Главная
      </Link>
      <Link
        href="/about-company"
        className="hover:underline text-lg mr-20 text-white"
      >
        О компании
      </Link>
      <Link
        href="/contacts"
        className="hover:underline text-lg mr-20 text-white"
      >
        Контакты
      </Link>
      <button className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black rounded-md text-white">
        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
      </button>
    </nav>
  );
};

export default Navbar;
