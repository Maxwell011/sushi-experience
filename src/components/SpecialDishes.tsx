import { useState } from "react";
import { SPECIAL_DISHES } from "../../constants/index";
import ArrowIcon from "../svg/ArrowIcon";
import LoveIcon from "../svg/LoveIcon";
import StarIcon from "../svg/StarIcon";
import "animate.css";
const SpecialDishes = () => {
  return (
    <>
      <section className="mt-24 mb-24">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#F63B3B] text-base font-bold tracking-[3.08px] font-inter uppercase lg:ml-[90px]">
            special dishes
          </h2>
          <div className="flex justify-between items-center mx-[90px]">
            <h1 className="text-normal-black text-lg lg:text-3xl font-bold font-inter">
              Best Dishes From Our Menu{" "}
            </h1>
            <p className="hidden lg:block">
              <div className="flex gap-2">
                <ArrowIcon />
              </div>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
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
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="shadow-[2px_9px_42px_0px_rgba(0,0,0,0.12)] w-[300px] h-[350px] rounded-[40px] flex items-center flex-col justify-center">
      <div className="w-20 h-[50px] absolute ml-[220px] mb-[302px] p-0 rounded-[0px_37.5px] bg-light-green flex items-center justify-center">
        <LoveIcon onClick={toggleLike} liked={liked} />
      </div>
      <img src={image} alt={title} className="w-52 h-52" />
      <div className="flex flex-col items-start gap-1">
        <h2 className="text-normal-black text-lg lg:text-2xl font-bold font-inter">
          {title}
        </h2>
        <p className="text-[#555] text-[16px] font-semibold font-inter">
          {description}
        </p>
        <div className="flex items-center gap-[180px]">
          <div className="text-[#FF6868] text-xl font-bold">
            {currency}
            <span className="text-normal-black text-lg font-bold">
              {price}
            </span>{" "}
          </div>
          <div className="flex items-center gap-1">
            <StarIcon />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
