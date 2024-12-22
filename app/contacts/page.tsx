"use client";

import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Navbar from "app/components/Navbar";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contacts: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    alert("Сообщение успешно отправлено!");
  };

  return (
    <>
      <Header />

      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="container mx-auto flex flex-col lg:flex-row bg-white shadow-lg rounded-lg">
          {/* Левая часть с формой */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Имя */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Введите ваше имя" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ваше имя"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* E-mail */}
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
                  {...register("email", { required: "Введите ваш email" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ваш email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Сообщение */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Введите ваше сообщение",
                  })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ваше сообщение"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Отправить
              </button>
            </form>
          </div>

          {/* Правая часть с информацией */}
          <div className="lg:w-1/2 bg-gray-200 p-6">
            <h2 className="text-2xl font-bold mb-4">Контактная информация</h2>
            <p className="mb-4">
              Если у вас есть вопросы или предложения, свяжитесь с нами через
              форму или по контактным данным ниже.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">E-mail МБ Принт:</h3>
                <p className="text-gray-700">mb@mbprint.ru</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Менеджер Сергей:</h3>
                <p className="text-gray-700">morozov@mbprint.ru</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Менеджер Алексей:</h3>
                <p className="text-gray-700">gorokhov@mbprint.ru</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Менеджер Марина:</h3>
                <p className="text-gray-700">manager@mbprint.ru</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Телефон:</h3>
                <p className="text-gray-700">+7 (499) 350-64-25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab2d5776dc478957d1fda918ab5b87b121c245cb881dfcd144bd2ba2ec4c791e0&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
          className="rounded-lg"
          title="Карта"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
