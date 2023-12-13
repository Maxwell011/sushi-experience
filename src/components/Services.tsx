import CateringIcon from "../svg/CateringIcon";
import FastDeliveryIcon from "../svg/FastdeliveryIcon";
import GiftCardIcon from "../svg/GiftCardIcon";
import OnlineOrderingIcon from "../svg/OnlineOrderingIcon";

const Services = () => {
  return (
    <div>
      <section className=''>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-5'>
            <h2 className='uppercase text-[#F63B3B] text-[22px] font-bold tracking-[3.08px] font-inter mb-7'>
              our story & services
            </h2>
            <h1 className='text-normal-black w-[635px] font-inter text-6xl font-bold mb-1'>
              Our Culinary Journey And Services
            </h1>
            <p className='text-[#4A4A4A] text-[23px] font-medium font-inter w-[655px]'>
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <div className='flex items-center gap-[20px]'>
              <button className='w-[155px] h-[50px] shadow-[-2px_10px_50px_0px_rgba(57,219,74,0.50)] rounded-[40px] bg-light-green text-normal-white text-[20px]'>
                Explore
              </button>
            </div>
          </div>

          <div className='grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] gap-[30px]'>
            <div className='shadow-[7px_12px_43px_0px_rgba(0,0,0,0.14)] w-[277px] h-[270px] rounded-[30px] bg-normal-white flex items-center justify-center'>
              <div className='flex flex-col items-center gap-1'>
                <CateringIcon />
                <h3 className='text-[#5FE26C] text-center text-2xl font-bold uppercase font-inter'>
                  catering
                </h3>
                <p className='w-[220px] text-[#90BD95] text-center text-xl font-semibold'>
                  Delight your guests with our flavors and presentation
                </p>
              </div>
            </div>
            <div className='shadow-[7px_12px_43px_0px_rgba(0,0,0,0.14)] w-[277px] h-[270px] rounded-[30px] bg-normal-white flex items-center justify-center'>
              <div className='flex flex-col items-center gap-1'>
                <FastDeliveryIcon />
                <h3 className='text-[#5FE26C] text-center text-2xl font-bold uppercase font-inter'>
                  fast delivery
                </h3>
                <p className='w-[236px] text-[#90BD95] text-center text-xl font-semibold'>
                  We deliver your order promptly to your door{" "}
                </p>
              </div>
            </div>
            <div className='shadow-[7px_12px_43px_0px_rgba(0,0,0,0.14)] w-[277px] h-[270px] rounded-[30px] bg-normal-white flex items-center justify-center'>
              <div className='flex flex-col items-center gap-1'>
                <OnlineOrderingIcon />
                <h3 className='text-[#5FE26C] text-center text-2xl font-bold uppercase font-inter'>
                  Online Ordering
                </h3>
                <p className='w-[236px] text-[#90BD95] text-center text-xl font-semibold'>
                  Explore menu & order with ease using our Online Ordering{" "}
                </p>
              </div>
            </div>
            <div className='shadow-[7px_12px_43px_0px_rgba(0,0,0,0.14)] w-[277px] h-[270px] rounded-[30px] bg-normal-white flex items-center justify-center'>
              <div className='flex flex-col items-center gap-1'>
                <GiftCardIcon />
                <h3 className='text-[#5FE26C] text-center text-2xl font-bold uppercase font-inter'>
                  gift cards
                </h3>
                <p className='w-[220px] text-[#90BD95] text-center text-xl font-semibold'>
                  Give the gift of exceptional dining with Food Gift Cards{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
