import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-700">
      {/* Картинка */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[310px] object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-700"></div>
      {/* Описание */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-5 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <h3 className="text-lg">{title}</h3>
      </div>
    </div>
  );
};

const BlogCards: React.FC = () => {
  const cardData = [
    {
      imageUrl: "/img/developer1.jpg",
      title: "01. Альбом в твердом переплете",
    },
    {
      imageUrl: "/img/developer2.jpg",
      title: "02. Презентационные брошюры",
    },
    {
      imageUrl: "/img/developer3.jpg",
      title: "03. Книга о проекте в упаковочной коробке",
    },
    {
      imageUrl: "/img/developer4.jpg",
      title: "04. Презентационный альбом",
    },
  ];

  return (
    <div className="container bg-slate-700 max-w-full mx-auto  py-10 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
