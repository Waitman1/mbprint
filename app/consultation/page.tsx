"use client";

import { FC } from "react";
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from "app/components/Footer";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  organization: string;
  position: string;
  request: string;
  file: FileList;
};

const Consultation: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert("Форма успешно отправлена!");
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full flex overflow-hidden">
          {/* Левая часть */}
          <div className="p-5 bg-gray-100 rounded-lg shadow-md text-gray-800">
            {/* Заголовок формы */}
            <h2 className="text-xl font-bold text-blue-500 mb-4">
              Оцените невероятно высокие стандарты работы
            </h2>

            {/* Список стандартов */}
            <ul className="list-disc pl-5 space-y-2">
              <li>Идеальное воспроизведение</li>
              <li>Точность цветовоспроизведения всегда менее 3 ΔЕ</li>
              <li>Точность совпадения брендовых цветов по PANTONE</li>
              <li>100% соблюдение сроков</li>
              <li>Режимное складское хранение и гибкая логистика</li>
              <li>
                Двойной контроль на всех этапах для исключения ошибок и брака
              </li>
              <li>
                Компетентная и опытная команда, проверенная на сотнях проектов
              </li>
              <li>Работа с эксклюзивными печатными материалами</li>
              <li>Работа с белилами, лаками и отделкой</li>
            </ul>

            {/* Подзаголовок формы */}
            <h3 className="text-lg font-semibold mt-6 mb-2">
              Отправьте заявку, чтобы получить:
            </h3>

            {/* Список преимуществ */}
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Карту проекта с наилучшим соотношением цены, сроков и качества
              </li>
              <li>
                План, как оптимизировать стоимость изготовления всей полиграфии
                в вашей компании
              </li>
            </ul>
          </div>

          {/* Правая часть */}
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Электронная почта
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Введите вашу почту" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите вашу почту"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Имя */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: "Введите ваше имя" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите ваше имя"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Фамилия */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Фамилия
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName", {
                    required: "Введите вашу фамилию",
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите вашу фамилию"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              {/* Организация */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-700"
                >
                  Организация
                </label>
                <input
                  type="text"
                  id="organization"
                  {...register("organization")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите название вашей организации"
                />
              </div>

              {/* Должность */}
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Должность
                </label>
                <input
                  type="text"
                  id="position"
                  {...register("position")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите вашу должность"
                />
              </div>

              {/* Запрос */}
              <div>
                <label
                  htmlFor="request"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ваш запрос
                </label>
                <textarea
                  id="request"
                  {...register("request", { required: "Опишите ваш запрос" })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите ваш запрос"
                ></textarea>
                {errors.request && (
                  <p className="text-red-500 text-sm">
                    {errors.request.message}
                  </p>
                )}
              </div>

              {/* Прикрепление файла */}
              <div>
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700"
                >
                  Прикрепить файл
                </label>
                <input
                  type="file"
                  id="file"
                  {...register("file")}
                  className="mt-1 block w-full text-gray-700"
                />
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Отправить форму
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consultation;
