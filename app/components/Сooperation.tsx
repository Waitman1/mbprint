"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const options = [
  {
    title: "Разовые проекты",
    description: [
      "Анализ проекта и подготовка ТЗ с консультацией по подбору материалов, способам печати и отделки",
      "Планирование сроков с Заказчиком, Проверка макетов и материалов",
      "список ошибок и нарушений технических требований",
      "Услуги, не включенные в план доступны Заказчикам за дополнительную оплату. Оставьте заявку на полное описание вариантов сотрудничества",
    ],
    buttonText: "Оставить заявку",
  },
  {
    title: "Обслуживание постоянных заказчиков",
    description: [
      "Все что включает 'Разовые проекты'",
      "Оптимизация ТЗ по сложности производства и стоимости, с детальным ТЗ и технологической картой",
      "Складской сервис",
    ],
    buttonText: "Оставить заявку",
  },
  {
    title: "Премиальное обслуживание корпоративных клиентов",
    description: [
      "Все что включает 'Обслуживание постоянных заказчиков'",
      "Подбор, тестирование, закупка и хранение нестандартных материалов",
      "Дизайн и доработка макетов",
      "Подготовка макетов для многокрасочной печати (INDICHROME) и печати белилами (WHITE)",
      "Контроль воспроизведения фирменных цветов и попадание в PANTONE",
      "Цветопроба и спектрометрия",
      "Присутствие на приладке",
      "Управление цифровыми архивами и электронная версия издания",
      "Логистический и почтовый сервис",
    ],
    buttonText: "Оставить заявку",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeOut",
    },
  }),
};

const Cooperation: React.FC = () => {
  // Подключаем IntersectionObserver
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Запускаем анимацию при появлении в области видимости
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="container mx-auto px-20 py-10 ">
      <h2 className="text-center text-3xl font-bold mb-8">
        Три варианта сотрудничества
      </h2>
      <motion.div
        ref={ref} // Связываем контейнер с IntersectionObserver
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
        initial="hidden"
        animate={controls}
      >
        {options.map((option, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center pb-6 pr-6 pl-6 border rounded-lg shadow-md bg-cyan-900 hover:shadow-lg transition-shadow justify-between"
            variants={cardVariants}
            custom={index}
          >
            <div className="flex flex-col items-center ">
              {/* Заголовок */}
              <h3 className="text-xl font-semibold mb-4 bg-gray-700  text-white w-[200px] text-center leading-4  py-2 px-3">
                {option.title}
              </h3>
              {/* Описание */}
              <ul className="text-white  text-lg ">
                {option.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-md w-full my-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Кнопка */}
            <button className="px-4 py-4 mt-10 bg-white text-black font-medium rounded ">
              {option.buttonText}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cooperation;
