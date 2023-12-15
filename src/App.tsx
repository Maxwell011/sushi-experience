import "./App.css";
import Favourite from "./components/Favourite";
import Footer from "./components/Footer";
import Services from "./components/Services";
import SpecialDishes from "./components/SpecialDishes";
import Testimonials from "./components/Testimonials";
import Nav from "./components/nav";
import PlayIcon from "./svg/PlayIcon";

function App() {
  return (
    <>
      <main className='pl-[90px] pr-[90px]'>
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
              <p className='text-[#4A4A4A] text-[26px] not-italic font-normal font-inter w-[825px]'>
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
                <div className='chat-bubble text-[#FF6868] text-lg font-semibold font-inter bg-normal-white'>
                  Best Sushi Ever!
                </div>
              </div>{" "}
              <img src='/MAIN SUSHI IMAGE.png' alt='sushi image' />
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
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
