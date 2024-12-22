import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Professionals from "../components/Professionals";

const AboutCompany: FC = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  bg-white ">
        <main>
          <section id="about" className="py-12 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">О компании</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                ОСНОВНОЙ ПРИНЦИП РАБОТЫ — ДЕЛАЕМ ТО, ЧТО ДРУГИЕ СЧИТАЮТ
                НЕВОЗМОЖНЫМ
              </p>
              <p>
                Мы выработали принципы работы, внедрили сервисный подход и
                наладили производство таким образом, что выполняем задачи,
                которые другие не могут выполнить.
              </p>
            </div>
          </section>

          <section id="history" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                История нашей компании
              </h2>
              <div className="relative">
                {/* Вертикальная линия */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-600 md:block hidden"></div>
                <div className="absolute left-4 h-full border-l-2 border-blue-600 block md:hidden"></div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">1997</h3>

                    <p className="text-gray-600">
                      Сергей Морозов и Алексей Горохов основали MB Print в
                      декабре 1997 года. Они выбрали рекламную полиграфию как
                      основной вид деятельности и сделали приоритетами компании
                      следующие принципы:
                    </p>
                    <ul>
                      <li>Максимальная оперативность</li>
                      <li>Высокое качество</li>
                      <li>Сбалансированная стоимость</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/1997_kvadrat4-2.png"
                      alt="Основание компании"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2002</h3>

                    <p className="text-gray-600">
                      Установили четырёхкрасочную офсетную машину Shinohara
                      52IVP и заключили крупные контракты с выставочной
                      компанией МВК и страховой компанией РОСНО.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2002_install-Sh52IVP_kvadrat4.png"
                      alt="Первый продукт"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2004</h3>

                    <p className="text-gray-600">
                      Установили новый листоподборочно- брошюровальный комплекс
                      башенного типа Horizon VAC 100, комплекс для
                      термопереплета Horizon BQ250 с автоматической подачей
                      обложек и трафаретный участок на основе полуавтомата и
                      ультрафиолетовой сушки Заключили контракт с Capital Group
                      Для выполнения проектов в совершенстве освоили технологию
                      многокрасочной печати металлизированными PANTONE
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2004_Horizon_kvadrat4-1.png"
                      alt="Международный рынок"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2008</h3>

                    <p className="text-gray-600">
                      Для обеспечения большей оперативности и повышения качества
                      печати запустили свой участок производства CTP-форм на
                      основе CTP AGFA Palladio II, который производит 150
                      серебро-содержащих форм в смену. Заключили долгосрочные
                      контракты с AFI Development.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2008_Agfa_kvadrat4.png"
                      alt="Лидер отрасли"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2011</h3>

                    <p className="text-gray-600">
                      Для нанесения индивидуальных штрих-кодов и других
                      переменных данных установили струйный принтер RISO
                      ComColor 7050, который печатает 120 цветных копий в
                      минуту.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2011_kvadrat4-1.png"
                      alt="Международный рынок"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2012</h3>

                    <p className="text-gray-600">
                      Установили струйный принтер RISO ComColor 7010. Совместили
                      цифровую и офсетную печать: добились высокого качества и
                      снизились себестоимость производства. Разработали для
                      клиентов современные решения по уникальным ценам.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2012_RISO_ComColor_7010.png"
                      alt="Лидер отрасли"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2013</h3>

                    <p className="text-gray-600">
                      Установили промышленную каплеструйную систему AGOR JET и
                      снизили себестоимость производства больших тиражей
                      персонализированной полиграфической продукции: билеты,
                      квитанции, лотерейные билеты, телефонные SIM и
                      интернет-карты
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2013_AGOR_JET2.png"
                      alt="Международный рынок"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2014</h3>

                    <p className="text-gray-600">
                      Установили резальную машину Polar N78 ECO. Увеличили
                      точность и производительность резки. Установили
                      Семи-красочную HP Indigo 5500 для максимального
                      приближения качества цифровой печати к офсетной.
                      Традиционные краски CMYK, три дополнительных, – Green,
                      Orange, Violet, – и кроющие белила. Точность цветопередачи
                      – 97%. Получили:
                    </p>
                    <ul>
                      <li>
                        Расширенный цветовой охват, включая недоступные в
                        цветовой модели RGB краски
                      </li>
                      <li>
                        Максимально возможное воспроизведение цветовой системы
                        Pantone в цифровой печати
                      </li>
                      <li>
                        Прямую печать из Adobe RGB: из файлов PDF с встроенными
                        изображениями в RGB
                      </li>
                      <li>
                        Расширенные возможности печати фотографий,
                        художественных постеров, репродукций и картин
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2014_Polar_78_ECO.png"
                      alt="Лидер отрасли"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2017</h3>

                    <p className="text-gray-600">
                      Установили фальцовщик/биговщик Multigraf Eurofold
                      Touchline CF375, который одновременно бигует и фальцует
                      плотную бумагу с максимально возможной точностью.
                    </p>
                    <p className="text-gray-600">
                      Совершили революционное преобразования уверенно и
                      профессионально войдя на рынок изготовления книг по
                      технологии FlexBind. Нестандартное мышление и
                      математически точный подход позволил быстро создавать
                      самые сложные работы, которые оказывались не под силу
                      другим.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2017_Multigraf_Eurofold_Touchline_CF375.png"
                      alt="Международный рынок"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2019</h3>

                    <p className="text-gray-600">
                      Установили PUR-клеевую машину закрытого типа ULTRABIND
                      2000 PUR. Максимальная прецизионная точность и
                      аккуратность склейки при высокой экономии расходных
                      материалов.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/2019_ULTRABIND_2000_PUR.png"
                      alt="Лидер отрасли"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="mb-10 flex flex-col md:flex-row items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-right md:pr-12">
                    <h3 className="text-xl font-bold text-blue-600">2021</h3>

                    <p className="text-gray-600">
                      31 августа 2021 в типографии начала работу листовая
                      цифровая печатная машина Konica Minolta AccurioPress
                      C12000.
                    </p>
                    <p>
                      Новое оборудование мы искали специально для работы с
                      материалами, которые не получается нормально запечатывать
                      на HP Indigo, такие как ColorPlan или PureCotton.
                    </p>
                    <p>
                      В процессе поиска мы изучили цифровые машины с сухим
                      тонером всех основных производителей. По качеству и
                      скорости печати они находятся примерно на одном уровне, но
                      по важным для нашей типографии характеристикам
                      AccurioPress C12000 превосходит аналоги.
                    </p>
                    <p>
                      Тонер AccurioPress C12000 прекрасно держится на нужных
                      материалах, в машине грамотно реализована функция
                      управления матовостью оттиска, что важно для многих наших
                      проектов. Второе важное преимущество заключается в том,
                      что листы длиной до 900 мм, позволяющие нам выпускать
                      альбомные брошюры форматом до А3, обложки и буклеты А4 с
                      тремя фальцами, попадают в машину из лотков с
                      пневматической подачей, а не фрикционной — это стабильнее
                      и надежнее. С помощью новой AccurioPress C12000 мы сможем
                      решить еще одну задачу — вытеснить из техпроцесса
                      имеющуюся у нас листовую офсетную машину формата А3. Новая
                      ЦПМ обеспечивает не только сравнимое качество печати, но и
                      очень приятную себестоимость, которая позволяет легко
                      конкурировать на тиражах до 800 оттисков. Ну а
                      оперативность ее работы, конечно, намного выше, чем
                      офсета.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/Konica_Minolta_AccurioPress_C12000.jpg"
                      alt="Международный рынок"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                <div className="mb-10 flex flex-col md:flex-row-reverse items-center md:items-start">
                  <div className="md:w-1/2 px-4 text-left md:pl-12">
                    <h3 className="text-xl font-bold text-blue-600">2021</h3>

                    <p className="text-gray-600">
                      Установка комплекта оборудования для изготовления твёрдого
                      переплёта Schmedt! PräziCoat, PräKant, PräLeg XS, PräForm
                      XS.
                    </p>
                    <p>
                      Осваивая направление книг в твёрдом переплёте, в MB Print
                      ориентировались в первую очередь на качественную и дорогую
                      продукцию, которая, в свою очередь, предъявляет высокие
                      требования к оборудованию и квалификации сотрудников
                      типографии.
                    </p>
                    <p>
                      19 апреля 2021 г мы продолжили развивать направление по
                      выпуску премиальной книжной продукции и стали первым в
                      Москве обладателем комплекса оборудования Schmedt серии
                      XS, предназначенного для изготовления книг в твердом
                      переплете.
                    </p>
                    <p>
                      Установленный комплекс включает следующее оборудование:
                    </p>
                    <p>
                      PräziCoat — двухвалковая клеемазальная машина, позволяющая
                      работать с горячим и холодным клеями и различными типами
                      покровных материалов.
                    </p>
                    <p>
                      Клеемазальная машина PräziCoat имеет удобную и надежную
                      конструкцию. Верхние клеевые валики снимаются, поэтому
                      смывка клея отнимает всего около пяти минут. Даже если
                      клей засох, его можно легко смыть водой.Раньше в
                      типографии пользовались клеемазальной машиной
                      отечественного производства. В целом, как объяснил
                      Морозов, это хорошая машина, но она долго перестраивается
                      на новый материал и подходит не для всех видов материалов.
                    </p>
                  </div>
                  <div className="md:w-1/2 px-4 mt-4 md:mt-0">
                    <img
                      src="img/PraziCoat_PraKant_PraLeg_XS_PraForm_XS.jpg"
                      alt="Лидер отрасли"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Professionals />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AboutCompany;
