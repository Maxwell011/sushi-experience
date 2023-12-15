const Favourite = () => {
  return (
    <>
      <section className='flex flex-col gap-[50px]'>
        <div className='flex flex-col justify-center gap-[10px]'>
          <h1 className='text-[#F63B3B] text-[19px] font-bold leading-[normal] tracking-[3.08px] font-inter text-center'>
            CUSTOMER FAVORITES
          </h1>
          <p className='text-normal-black text-6xl not-italic font-bold font-inter text-center'>
            Popular Categories
          </p>
        </div>

        <div className='flex justify-center gap-[25px]'>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white flex items-center justify-center flex-col gap-1'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img
                src='/_78d38fb4-559d-4cdb-822d-44ecdec0a7f8-removebg-preview 1.png'
                alt='popular-dish'
              />
            </div>
            <h2 className='text-[#1E1E1E] text-center text-xl font-semibold font-inter'>
              Main Dish
            </h2>
            <p className='text-[#555] text-center text-[15px] font-medium font-inter'>
              (86 dishes)
            </p>
          </div>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white flex items-center justify-center flex-col gap-1'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img
                src='/_35e8e57c-d430-4c19-93de-71e2eb204d0f-removebg-preview 1.png'
                alt='popular-dish'
              />
            </div>
            <h2 className='text-[#1E1E1E] text-center text-xl font-semibold font-inter'>
              Breakfast
            </h2>
            <p className='text-[#555] text-center text-[15px] font-medium font-inter'>
              (12 dishes)
            </p>
          </div>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white flex items-center justify-center flex-col gap-1'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img
                src='/_a9c4460d-a7e5-496e-b46a-360fde90c966-removebg-preview 1.png'
                alt='popular-dish'
              />
            </div>
            <h2 className='text-[#1E1E1E] text-center text-xl font-semibold font-inter'>
              Sushi Combo
            </h2>
            <p className='text-[#555] text-center text-[15px] font-medium font-inter'>
              (combo of 6)
            </p>
          </div>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white flex items-center justify-center flex-col gap-1'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img
                src='/_cc226cf5-2147-430e-b16c-84644636b1fe-removebg-preview 1.png'
                alt='popular-dish'
              />
            </div>
            <h2 className='text-[#1E1E1E] text-center text-xl font-semibold font-inter'>
              Browse All
            </h2>
            <p className='text-[#555] text-center text-[15px] font-medium font-inter'>
              (255 items)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Favourite;
