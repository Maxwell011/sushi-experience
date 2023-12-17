import { SPECIAL_DISHES } from "../../constants/index";
import ArrowIcon from "../svg/ArrowIcon";
import LoveIcon from "../svg/LoveIcon";
import StarIcon from "../svg/StarIcon";

const SpecialDishes = () => {
  return (
    <>
      <section className='mt-44 mb-44'>
        <div className=''>
          <h2 className='text-[#F63B3B] text-[20px] font-bold tracking-[3.08px] font-inter uppercase ml-[90px]'>
            special dishes
          </h2>
          <div className='flex justify-between items-center mx-[90px]'>
            <h1 className='text-normal-black text-[57px] font-bold w-[453px] font-inter'>
              Best Dishes From Our Menu{" "}
            </h1>
            <p>
              <ArrowIcon />
            </p>
          </div>
        </div>

        <div className='flex items-center justify-center gap-10'>
          {SPECIAL_DISHES.map((dishes) => (
            <DishesItem
              key={dishes.title}
              title={dishes.title}
              image={dishes.image}
              description={dishes.description}
              currency={dishes.currency}
              price={dishes.price}
              rating={dishes.rating}
            />
          ))}
        </div>
      </section>
    </>
  );
};

type DishesItem = {
  title: string;
  image: string;
  description: string;
  currency: string;
  price: string;
  rating: string;
};

const DishesItem = ({
  title,
  image,
  description,
  currency,
  price,
  rating,
}: DishesItem) => {
  return (
    <div className='shadow-[2px_9px_42px_0px_rgba(0,0,0,0.12)] w-[350px] h-[450px] rounded-[40px] flex items-center flex-col justify-center'>
      <div className='w-20 h-[50px] absolute ml-[272px] mb-[400px] p-0 rounded-[0px_37.5px] bg-light-green flex items-center justify-center'>
        <LoveIcon />
      </div>
      <img src={image} alt={title} />
      <div className='flex flex-col items-start gap-1'>
        <h2 className='text-normal-black text-3xl font-bold font-inter'>
          {title}
        </h2>
        <p className='text-[#555] text-[16px] font-semibold font-inter'>
          {/* {description} */}
        </p>
        <div className='flex items-center gap-[180px]'>
          <div className='text-[#FF6868] text-xl font-bold'>
            {currency}
            <span className='text-normal-black text-xl font-bold'>
              {price}
            </span>{" "}
          </div>
          <div className='flex items-center gap-1'>
            <StarIcon />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
