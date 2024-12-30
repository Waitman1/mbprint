import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Professionals from "../components/Professionals";
import FlipCard from "app/components/FlipCard";
import Indicators from "app/components/Indicators";

const AboutCompany: FC = () => {
  const events = [
    {
      year: "1997",
      image: "img/1997_kvadrat4-2.png",
      title:
        "Сергей Морозов и Алексей Горохов основали MB Print в декабре 1997 года. Они выбрали рекламную полиграфию как основной вид деятельности и сделали приоритетами компании следующие принципы:",
      description:
        "Максимальная оперативность,Высокое качество, Сбалансированная стоимость",
    },
    {
      year: "2002",
      image: "img/2002_install-Sh52IVP_kvadrat4.png",
      title:
        "Установили четырёхкрасочную офсетную машину Shinohara 52IVP и заключили крупные контракты с выставочной компанией МВК и страховой компанией РОСНО.",
    },
    {
      year: "2004",
      image: "img/2004_Horizon_kvadrat4-1.png",
      title:
        "Установили новый листоподборочно- брошюровальный комплекс башенного типа Horizon VAC 100, комплекс для термопереплета Horizon BQ250 с автоматической подачей обложек и трафаретный участок на основе полуавтомата и ультрафиолетовой сушки Заключили контракт с Capital Group Для выполнения проектов в совершенстве освоили технологию  многокрасочной печати металлизированными PANTONE",
    },
    {
      year: "2008",
      image: "img/2008_Agfa_kvadrat4.png",
      title:
        "Для обеспечения большей оперативности и повышения качества печати запустили свой участок производства CTP-форм на основе CTP AGFA Palladio II, который производит 150 серебро-содержащих форм в смену. Заключили долгосрочные контракты с AFI Development.",
    },
    {
      year: "2011",
      image: "img/2011_kvadrat4-1.png",
      title:
        "Для нанесения индивидуальных штрих-кодов и других переменных данных установили струйный принтер RISO ComColor 7050, который печатает 120 цветных копий в минуту.",
    },
    {
      year: "2012",
      image: "img/2012_RISO_ComColor_7010.png",
      title:
        "Установили струйный принтер RISO ComColor 7010. Совместили цифровую и офсетную печать: добились высокого качества и снизились себестоимость производства. Разработали для клиентов современные решения по уникальным ценам.",
    },
    {
      year: "2013",
      image: "img/2013_AGOR_JET2.png",
      title:
        "Установили промышленную каплеструйную систему AGOR JET и снизили себестоимость производства больших тиражей персонализированной полиграфической продукции: билеты, квитанции, лотерейные билеты, телефонные SIM и интернет-карты",
    },
    {
      year: "2014",
      image: "img/2014_Polar_78_ECO.png",
      title:
        "Установили резальную машину Polar N78 ECO. Увеличили точность и производительность резки. Установили Семи-красочную HP Indigo 5500 для максимального приближения качества цифровой печати к офсетной. Традиционные краски CMYK, три дополнительных, – Green, Orange, Violet, – и кроющие белила. Точность цветопередачи – 97%.",
    },
    {
      year: "2017",
      image: "img/2017_Multigraf_Eurofold_Touchline_CF375.png",
      title:
        "Установили фальцовщик/биговщик Multigraf Eurofold Touchline CF375, который одновременно бигует и фальцует плотную бумагу с максимально возможной точностью. Совершили революционное преобразования уверенно и профессионально войдя на рынок изготовления книг по технологии FlexBind. Нестандартное мышление и математически точный подход позволил быстро создавать самые сложные работы, которые оказывались не под силу другим.",
    },
    {
      year: "2019",
      image: "img/2019_ULTRABIND_2000_PUR.png",
      title:
        "Установили PUR-клеевую машину закрытого типа ULTRABIND 2000 PUR. Максимальная прецизионная точность и аккуратность склейки при высокой экономии расходных материалов.",
    },
    {
      year: "2021",
      image: "img/Konica_Minolta_AccurioPress_C12000.jpg",
      title:
        "31 августа 2021 в типографии начала работу листовая цифровая печатная машина Konica Minolta AccurioPress C12000.",
    },
    {
      year: "2021",
      image: "img/PraziCoat_PraKant_PraLeg_XS_PraForm_XS.jpg",
      title:
        "Установка комплекта оборудования для изготовления твёрдого переплёта Schmedt! PräziCoat, PräKant, PräLeg XS, PräForm XS.",
    },
  ];

  return (
    <div className="">
      <Header />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          История компании
        </h2>
        <p className="text-2xl sm:text-xxl text-center">
          Ключевые этапы развития типографии MB Print
        </p>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-700 transform -translate-x-1/2"></div>

          {/* События */}
          <div className="flex flex-col space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center sm:items-start ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse text-right sm:text-left"
                }`}
              >
                {/* Линия соединения */}
                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 h-12 sm:h-0 bg-black"></div>

                {/* Картинка справа или слева */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0 ? "right-[260px]" : "left-[260px]"
                  } z-0 hidden lg:block`} // Картинка скрыта на мобильных, показывается на экранах lg и выше
                >
                  <img
                    src={event.image}
                    alt="event image"
                    className="object-cover w-[200px] h-[200px]"
                  />
                </div>

                {/* Карточка */}
                <div
                  className={`bg-[#2a5298] shadow-lg rounded-lg p-6 max-w-xs sm:max-w-md ${
                    index % 2 === 0 ? "sm:ml-8 sm:mr-0" : "sm:ml-0 sm:mr-8"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white">{event.year}</h3>
                  <h4 className="text-lg font-semibold text-white mt-2">
                    {event.title}
                  </h4>
                  <p className="text-white mt-2">{event.description}</p>
                </div>

                {/* Индикатор */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Professionals />
      <Indicators />

      <Footer />
    </div>
  );
};

export default AboutCompany;
