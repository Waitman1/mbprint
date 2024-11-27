import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Наша Компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
