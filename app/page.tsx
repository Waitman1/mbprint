import Advantage from "./components/Advantage";
import BlogCards from "./components/BlogCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Cooperation from "./components/Сooperation";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <BlogCards />
      <Advantage />
      <Cooperation />
      <Footer />
    </>
  );
}
