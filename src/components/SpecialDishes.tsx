import LoveIcon from "../svg/LoveIcon";
import StarIcon from "../svg/StarIcon";

const SpecialDishes = () => {
  return (
    <>
      <section>
        <h2 className='text-[#F63B3B] text-[20px] font-bold tracking-[3.08px] font-inter uppercase'>
          special dishes
        </h2>
        <div className='flex'>
          <h1 className='text-normal-black text-[57px] font-bold w-[453px] font-inter'>
            Best Dishes From Our Menu{" "}
          </h1>
          <p></p>
        </div>

        <div className='flex'>
          <div className='shadow-[2px_9px_42px_0px_rgba(0,0,0,0.12)] w-[350px] h-[450px] rounded-[40px] flex items-center flex-col justify-center'>
            <div className='w-20 h-[50px] absolute ml-[272px] mb-[400px] p-0 rounded-[0px_37.5px] bg-light-green flex items-center justify-center'>
              <LoveIcon />
            </div>
            <img src='/Sushi Salad 1.png' alt='sushi salad image' />
            <div className='flex flex-col items-start gap-1'>
              <h2 className='text-normal-black text-3xl font-bold font-inter'>
                Best Sushi Salad
              </h2>
              <p className='text-[#555] text-[16px] font-semibold font-inter'>
                Description of the item
              </p>
              <div className='flex items-center gap-[180px]'>
                <div className='text-[#FF6868] text-xl font-bold'>
                  $
                  <span className='text-normal-black text-xl font-bold'>
                    10.00
                  </span>{" "}
                </div>
                <div className='flex items-center'>
                  <StarIcon />
                  4.9
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SpecialDishes;
