import { PEOPLE_URL } from "../../constants/index";
import ChatboxIcon from "../svg/ChatboxIcon";
import StarIcon from "../svg/StarIcon";

const Testimonials = () => {
  return (
    <section className="mt-24 mb-24">
      <div className="flex flex-col sm:flex-row sm:flex items-center justify-between gap-28">
        <div className="flex flex-col items-end">
          <div className="">
            <img src="/IMAGE 4.png" alt="chef with chop stick image" />
          </div>
          <div className="mr-[-130px] -mt-10">
            <ChatboxIcon text="Our Best Chef 😁" />
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-5">
            <h2 className="uppercase text-[#F63B3B] lg:text-lg font-bold tracking-[3.08px] font-inter text-center lg:text-start">
              testimonials
            </h2>
            <h1 className="text-normal-black font-inter text-2xl lg:text-3xl font-bold mb-1">
              What Our Customers Say About Us{" "}
            </h1>
            <p className="text-[#4A4A4A] text-lg font-medium font-inter min-w-fit">
              “I had the pleasure of dining last night, and I'm still raving
              about the experience! The attention to detail in presentation and
              service was impeccable”
            </p>
            <div className="flexCenter gap-6 items-center flex">
              <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url) => (
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src={url}
                    key={url}
                    alt="customer images"
                    width={80}
                    height={80}
                  />
                ))}
              </span>
              <div className="">
                <p className="md:bold-20 text-white w-[258px] text-normal-black text-base font-semibold font-inter">
                  Customer Feedback
                </p>
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <p>
                    <span className="text-[#454545] text-base font-semibold">
                      4.5
                    </span>
                    <span className="text-[#807E7E] text-base font-medium">
                      {" "}
                      (18.6k Reviews)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
