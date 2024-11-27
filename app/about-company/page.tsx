import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutCompany: FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  bg-white ">
        <main>
          <section id="about" className="py-12 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">О нашей компании</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Мы начали с небольшой идеи, которая со временем превратилась в
                масштабный проект. Сегодня мы предоставляем услуги, которые
                делают жизнь людей лучше.
              </p>
            </div>
          </section>

          <section id="history" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                История нашей компании
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-600"></div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2010</h3>
                    <h4 className="text-lg font-semibold mb-2">
                      Основание компании
                    </h4>
                    <p className="text-gray-600">
                      Мы начали с небольшой команды энтузиастов, объединенных
                      идеей создания инновационного продукта.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="https://via.placeholder.com/400x250"
                      alt="Основание компании"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2015</h3>
                    <h4 className="text-lg font-semibold mb-2">
                      Первый успешный продукт
                    </h4>
                    <p className="text-gray-600">
                      Наша команда выпустила первый продукт, который мгновенно
                      завоевал популярность на рынке.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="https://via.placeholder.com/400x250"
                      alt="Первый продукт"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2020</h3>
                    <h4 className="text-lg font-semibold mb-2">
                      Выход на международный рынок
                    </h4>
                    <p className="text-gray-600">
                      Мы расширили горизонты, начав работать с клиентами и
                      партнерами из других стран.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="https://via.placeholder.com/400x250"
                      alt="Международный рынок"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2023</h3>
                    <h4 className="text-lg font-semibold mb-2">
                      Признание лидером
                    </h4>
                    <p className="text-gray-600">
                      Компания была признана лидером отрасли, получив множество
                      наград и признание клиентов.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="https://via.placeholder.com/400x250"
                      alt="Лидер отрасли"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contacts" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-gray-600">
                Свяжитесь с нами, чтобы узнать больше о наших услугах.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:info@company.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  info@company.com
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AboutCompany;
