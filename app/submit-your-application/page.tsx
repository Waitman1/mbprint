import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SubmitApplication: FC = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  bg-white "></div>
      <Footer />
    </div>
  );
};

export default SubmitApplication;
