import "./App.css";
import Favourite from "./components/Favourite";
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
      <main className=''>
        <Nav />
        <section className=''>
          <div className='flex items-center'>
            <div className=''>
              <h1 className='text-normal-black text-[62px] font-extrabold font-inter w-[600px]'>
                Sushi Bliss, Every Roll a Flavorful{" "}
                <span className='text-light-green text-[62px] font-extrabold'>
                  kiss
                </span>
              </h1>
              <p className='text-[#4A4A4A] text-[24px] not-italic font-normal font-inter w-[825px]'>
                Masters of Maki: Elevate Your Taste Buds with Our Sushi
                Creations, Where Tradition Meets Innovation!
              </p>
              <div className='flex items-center gap-[20px]'>
                <button className='w-[155px] h-[50px] shadow-[-2px_10px_50px_0px_rgba(57,219,74,0.50)] rounded-[40px] bg-light-green text-normal-white text-[20px]'>
                  Order Now
                </button>
                <div className='text-[#606060] text-[20px] font-semibold'>
                  Watch Video
                </div>
                <div>
                  <PlayIcon />
                </div>
              </div>
            </div>

            <div className=''>
              <div className='chat chat-end w-[220px] flex items-center justify-center'>
                <div className='chat-bubble text-[#FF6868] text-lg font-semibold font-inter bg-normal-white absolute mr-[452px] top-[460px]'>
                  Best Sushi Ever!
                </div>
              </div>{" "}
              <img
                src='/MAIN SUSHI IMAGE.png'
                alt='sushi image'
                className='ml-[-120px] mt-[270px]'
              />
              <div className='flex gap-3 ml-[-260px] mb-[250px]'>
                <div className='shadow-[7px_35px_51px_0px_rgba(0,0,0,0.14)] w-[355.506px] h-[132px] rounded-[25px] flex items-center gap-[10px]'>
                  <img
                    src='/_78d38fb4-559d-4cdb-822d-44ecdec0a7f8-removebg-preview 1.png'
                    alt='california-roll'
                    className='w-[134.461px] h-[118px]'
                  />{" "}
                  <div>
                    <h3 className='text-[#2C2C2C] text-[22px] font-semibold font-inter'>
                      California roll
                    </h3>
                    <StarIcon2 />
                    <div className='text-[#FF6868] text-xl font-bold'>
                      $
                      <span className='text-[#515151] text-2xl font-bold'>
                        23.00
                      </span>{" "}
                    </div>
                  </div>
                </div>

                <div className='shadow-[7px_35px_51px_0px_rgba(0,0,0,0.14)] w-[355.506px] h-[132px] rounded-[25px] flex items-center gap-[10px]'>
                  <img
                    src='/_cc226cf5-2147-430e-b16c-84644636b1fe-removebg-preview 1.png'
                    alt='popular-dish 2'
                    className='w-[108.995px] h-[97px]'
                  />{" "}
                  <div>
                    <h3 className='text-[#2C2C2C] text-[22px] font-semibold font-inter'>
                      Makizushi
                    </h3>
                    <StarIcon2 />
                    <div className='text-[#FF6868] text-xl font-bold'>
                      $
                      <span className='text-[#515151] text-2xl font-bold'>
                        18.00
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Favourite />
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

        <div className='footer footer-center p-4 bg-normal-white text-base-content'>
          <aside>
            <p className="text-xl">Copyright © 2023 - All right reserved by Shushi Food</p>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
