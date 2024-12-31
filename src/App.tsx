import "./App.css";
import Favorite from "./components/Favourite";
import Footer from "./components/Footer";
import Services from "./components/Services";
import SpecialDishes from "./components/SpecialDishes";
import Testimonials from "./components/Testimonials";
import Nav from "./components/nav";
import PlayIcon from "./svg/PlayIcon";
import StarIcon2 from "./svg/StarIcon2";

function App() {
  return (
    <>
      <main className="mt-[64px]">
        <Nav />
        <section className="">
          <div className="flex mb-[-190px] mt-16">
            <div className="mb-[320px] mt-7 lg:mt-0 flex flex-col items-center justify-center lg:items-start">
              <h1 className="text-normal-black text-4xl font-extrabold font-inter w-fit">
                Sushi Bliss, Every <br />
                Roll A Flavorful{" "}
                <span className="text-light-green text-4xl font-extrabold">
                  kiss
                </span>
              </h1>
              <p className="text-[#4A4A4A] text-lg not-italic font-normal font-inter w-fit">
                Masters of Maki: Elevate Your Taste Buds with Our Sushi <br />
                Creations, Where Tradition Meets Innovation!
              </p>
              <div className="flex items-center gap-[20px]">
                <button className="w-[140px] h-[50px] shadow-[-2px_10px_50px_0px_rgba(57,219,74,0.50)] rounded-[40px] bg-light-green text-normal-white text-lg">
                  Order Now
                </button>
                <div className="text-[#606060] text-lg font-semibold">
                  Watch Video
                </div>
                <div>
                  <PlayIcon />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="chat chat-end w-[220px] flex items-center justify-center ">
                <div className="chat-bubble text-[#FF6868] font-semibold font-inter bg-normal-white absolute mr-[420px] top-[170px] min-w-max">
                  Best Sushi Ever!
                </div>
              </div>{" "}
              <img
                src="/MAIN SUSHI IMAGE.png"
                alt="sushi image"
                className="mb-[420px] w-3/5 mt-[-65px] ml-[180px]"
              />
            </div>
            <div className="lg:flex gap-3 ml-[-160px] mb-[250px] absolute left-[730px] top-[310px] hidden">
              <div className="shadow-[7px_35px_51px_0px_rgba(0,0,0,0.14)] w-[300px] h-[125px] rounded-[25px] flex items-center gap-[10px] animate__animated animate__fadeInLeft">
                <img
                  src="/_78d38fb4-559d-4cdb-822d-44ecdec0a7f8-removebg-preview 1.png"
                  alt="california-roll"
                  className="w-[134.461px] h-[118px] animate__animated "
                />{" "}
                <div>
                  <h3 className="text-[#2C2C2C] text-lg font-semibold font-inter">
                    California roll
                  </h3>
                  <StarIcon2 />
                  <div className="text-[#FF6868] text-xl font-bold">
                    $
                    <span className="text-[#515151] text-base font-bold">
                      23.00
                    </span>{" "}
                  </div>
                </div>
              </div>

              <div className="shadow-[7px_35px_51px_0px_rgba(0,0,0,0.14)] w-[300px] h-[125px] rounded-[25px] flex items-center gap-[10px] animate__animated animate__fadeInLeft">
                <img
                  src="/_cc226cf5-2147-430e-b16c-84644636b1fe-removebg-preview 1.png"
                  alt="popular-dish 2"
                  className="w-[108.995px] h-[97px]"
                />{" "}
                <div>
                  <h3 className="text-[#2C2C2C] text-lg font-semibold font-inter">
                    Makizushi
                  </h3>
                  <StarIcon2 />
                  <div className="text-[#FF6868] text-xl font-bold">
                    $
                    <span className="text-[#515151] text-base font-bold">
                      18.00
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Favorite />
        </section>
        <section>
          <SpecialDishes />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Footer />
        </section>
        {/* <div className="footer footer-center p-4 bg-normal-white text-base-content">
          <aside>
            <p className="text-xl">
              Copyright © 2023 - All right reserved by Sushi Food
            </p>
          </aside>
        </div> */}
      </main>
    </>
  );
}

export default App;
