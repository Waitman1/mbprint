import React, { FC } from "react";

const TrustBlog: FC = () => {
  const companies = [
    { id: 1, logo: "img/MR-Group.png", name: "MR-Group" },
    { id: 2, logo: "img/vesper.webp", name: "vesper" },
    {
      id: 3,
      logo: "img/ant-devel.webp",
      name: "ant-devel",
    },
    {
      id: 4,
      logo: "img/3.webp",
      name: "Sika",
    },
    {
      id: 5,
      logo: "img/Groteck_logo2.png",
      name: "Groteck",
    },
    {
      id: 6,
      logo: "img/5.webp",
      name: "Insigma",
    },
    {
      id: 7,
      logo: "img/Fish-Point.png",
      name: "Fish-Point",
    },
    {
      id: 8,
      logo: "img/9.webp",
      name: "Hyve",
    },
    {
      id: 9,
      logo: "img/R4S-Group-logo.png",
      name: "R4S-Group",
    },
    {
      id: 10,
      logo: "img/voskhod.png",
      name: "voskhod",
    },
    { id: 11, logo: "img/10.webp", name: "mv company" },
    { id: 12, logo: "img/corpAEOH.png", name: "corpAEOH" },
    {
      id: 13,
      logo: "img/8.webp",
      name: "Компания 3",
    },
    {
      id: 14,
      logo: "img/groupvik.jpeg",
      name: "groupvik",
    },
    {
      id: 15,
      logo: "img/1.webp",
      name: "Пик",
    },
    {
      id: 16,
      logo: "img/14.webp",
      name: "Компания 6",
    },
    {
      id: 17,
      logo: "img/logo.png  ",
      name: "Компания 7",
    },
    {
      id: 18,
      logo: "img/11.webp",
      name: "Компания 8",
    },
    {
      id: 19,
      logo: "img/13.webp",
      name: "Компания 9",
    },
    {
      id: 20,
      logo: "img/Эталон-лого2.png",
      name: "Компания 10",
    },
    { id: 21, logo: "img/absolute.png", name: "Компания 1" },
    { id: 22, logo: "img/21.webp", name: "Компания 2" },
    {
      id: 23,
      logo: "img/20.webp",
      name: "Компания 3",
    },
    {
      id: 24,
      logo: "img/Superposition.png",
      name: "Superposition",
    },
    {
      id: 25,
      logo: "img/Allea.png",
      name: "Компания 5",
    },
    {
      id: 26,
      logo: "img/42.webp",
      name: "Компания 6",
    },
    {
      id: 27,
      logo: "img/Inrgad.jpeg",
      name: "Inrgad",
    },
    {
      id: 28,
      logo: "img/15.webp",
      name: "Компания 8",
    },
    {
      id: 29,
      logo: "img/16.webp",
      name: "Компания 9",
    },
    {
      id: 30,
      logo: "img/Astra.png",
      name: "Astra",
    },
    { id: 31, logo: "img/30.webp", name: "Компания 1" },
    { id: 32, logo: "img/12.webp", name: "Компания 2" },
    {
      id: 33,
      logo: "img/falcon.png",
      name: "falcon",
    },
    {
      id: 34,
      logo: "img/Show-Me.png",
      name: "Show-Me",
    },
    {
      id: 35,
      logo: "img/Лицей-Ковчег.jpg",
      name: "Лицей-Ковчег",
    },
    {
      id: 36,
      logo: "img/32.webp",
      name: "Компания 6",
    },
    {
      id: 37,
      logo: "img/31.webp",
      name: "Компания 7",
    },
    {
      id: 38,
      logo: "img/27.webp",
      name: "Компания 8",
    },
    {
      id: 39,
      logo: "img/25.webp",
      name: "Компания 9",
    },
    {
      id: 40,
      logo: "img/17.webp",
      name: "Компания 10",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-bold uppercase">Нам доверяют лучшие</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex justify-center items-center bg-white rounded-md shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-w-full h-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBlog;
