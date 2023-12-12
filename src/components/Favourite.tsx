const Favourite = () => {
  return (
    <>
      <section>
        <h1 className=''>CUSTOMER FAVORITES</h1>
        <p className=''>Popular Categories</p>

        <div className='flex justify-center gap-[25px]'>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white flex items-center justify-center flex-col'>
            <div
              className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px]
    h-[120px]'
            >
              <img src='/popular-1' alt='popular-dish' />
            </div>
            <h2>Main Dish</h2>
            <p>(86 dishes)</p>
          </div>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img src='/popular-2' alt='popular-dish' />
            </div>
            <h2>Breakfast</h2>
            <p>(12 dishes)</p>
          </div>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img src='/popular-3.png' alt='popular-dish' />
            </div>
            <h2>Sushi Combo</h2>
            <p>(combo of 6)</p>
          </div>
          <div className='shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] w-[260px] h-[250px] rounded-[40px] bg-normal-white'>
            <div className='bg-food-bar flex items-center justify-center rounded-[60px] w-[130px] h-[120px]'>
              <img src='/popular-4' alt='popular-dish' />
            </div>
            <h2>Browse All</h2>
            <p>(255 items)</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Favourite;
