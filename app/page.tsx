import Advantage from "./components/Advantage";
import BlogAboutCompany from "./components/BlogAboutCompany";
import BlogCards from "./components/BlogCards";

import Footer from "./components/Footer";
import Guarantees from "./components/Guarantees";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TrustBlog from "./components/TrustBlog";
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
      <BlogAboutCompany />
      <Guarantees />
      <TrustBlog />
      <Footer />
    </>
  );
}
