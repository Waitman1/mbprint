// pages/contacts.tsx
import { FC } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Contacts: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Контакты
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Адрес
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Москва, улица Примерная, дом 123, офис 45
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Телефон
              </h2>
              <p className="text-lg text-gray-600">+7 (123) 456-78-90</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Электронная почта
              </h2>
              <p className="text-lg text-gray-600 mb-4">info@mbprint.ru</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Рабочие часы
              </h2>
              <p className="text-lg text-gray-600">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-lg text-gray-600">Сб-Вс: выходной</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Связаться с нами
            </h2>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-lg font-medium text-gray-800"
                    htmlFor="name"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-medium text-gray-800"
                    htmlFor="email"
                  >
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                    placeholder="Введите вашу почту"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  className="block text-lg font-medium text-gray-800"
                  htmlFor="message"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                  rows={4}
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
