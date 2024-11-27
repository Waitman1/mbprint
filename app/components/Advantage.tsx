import Image from "next/image";
import React from "react";

const blocks = [
  {
    title: "Отлаженный процесс производства",
    icon: "/img/cog.svg",
    items: [
      "Двойной контроль каждого этапа",
      "Современное оборудование экспертного класса",
      "Строгое соблюдение технологии от начала и до конца",
      "Всегда делаем цветопробу и контрольные оттиски",
      "Обучаем сотрудников управлению качеством",
    ],
  },
  {
    title: "Экспертиза",
    icon: "/img/graduation-cap.svg",
    items: [
      "Определим цели по проекту",
      "Составим план-график",
      "Говорим на понятном Заказчику языке",
      "Формируем техническое задание, требования и спецификации",
    ],
  },
  {
    title: "Управление проектом",
    icon: "/img/server-cog.svg",
    items: [
      "Персональный менеджер с 15-летним опытом работы",
      "Разработка оптимального сценария проекта по стоимости, качеству и срокам",
      "Полная проработка всех привлекаемых технологий на совместимость с материалами",
    ],
  },
  {
    title: "Организация логистики",
    icon: "/img/car.svg",
    items: [
      "От простой доставки до сложных логистических операций",
      "Хранение, учет и поддержание остатков печатной продукции в офисе Заказчика",
      "Доставка по всему миру",
      "Страхование продукции",
    ],
  },
];

const Advantage: React.FC = () => {
  return (
    <div className="container bg-slate-700  mx-auto py-10 px-20 ">
      <p className="text-white text-lg p-4">[ Наш слоган ]</p>
      <h2 className="text-3xl font-bold text-white p-4">
        Мы – типография, не похожая ни на одну другую типографию
      </h2>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 gap-y-20">
        {blocks.map((block, index) => (
          <div key={index} className="flex flex-col">
            {/* SVG Icon */}
            <div className="mb-4">
              <Image
                src={block.icon}
                alt={`Icon for ${block.title}`}
                width={48}
                height={48}
                className="h-12 w-12 "
              />
            </div>
            {/* Title */}
            <h3 className="text-3xl text-white font-semibold mb-5">
              {block.title}
            </h3>
            {/* Description List */}
            <ul className="text-white space-y-1 text-xl">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-md w-full">
                  <span className="mr-2 text-white">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
