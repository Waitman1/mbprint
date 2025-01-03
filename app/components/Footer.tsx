import React, { FC } from "react";
// Импортируем изображение

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Основной контейнер */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
          {/* Логотип */}
          <div>
            <img src="img/logo2.svg" width={100} height={100} alt="Logo" />
          </div>

          {/* Контактная информация */}
          <div>
            <p>&copy; 1997-{currentYear} Все права защищены.</p>
          </div>

          <div>
            <p>125252 РФ, г. Москва, ул. Зорге 15</p>
          </div>

          <div>
            <p>+7 (499) 350-64-25</p>
            <p>mb@mbprint.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
