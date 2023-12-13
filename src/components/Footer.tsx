const Footer = () => {
  return (
    <>
      <footer className='footer p-10 bg-normal-white text-base-content'>
        <aside>
          <h1 className='flex items-center text-xl font-poppins cursor-pointer'>
            <span className='w-[41px] h-[46px] rounded-[13px] bg-light-green text-neutral-50 text-[40px] flex items-center justify-center'>
              S
            </span>
            <span className='text-black text-[40px] font-medium'>ushi</span>
          </h1>
          <p className='text-[#555] text-[19px] not-italic font-medium w-[302px] font-inter'>
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className='text-normal-black text-[26px] not-italic font-semibold mb-[8px]'>
            Useful links
          </header>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            About us
          </a>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            Events
          </a>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            Blogs
          </a>
          <a className='text-[#555] text-base font-inter font-medium cursor-pointer link-hover'>
            FAQ
          </a>
        </nav>
        <nav>
          <header className='text-normal-black text-[26px] not-italic font-semibold mb-[8px]'>
            Company
          </header>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            Home
          </a>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            Offers
          </a>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            Menus
          </a>
          <a className='link-hover text-[#555] text-base font-inter font-medium cursor-pointer'>
            Reservation
          </a>
        </nav>
        <nav>
          <header className='text-normal-black text-[26px] not-italic font-semibold'>
            Contact Us
          </header>
          <fieldset className='form-control w-80'>
            <label className='label'>
              <span className='label-text text-[#555] text-base font-inter font-medium'>
                Enter your email address
              </span>
            </label>
            <div className='join'>
              <input
                type='text'
                placeholder='username@site.com'
                className='input input-bordered join-item'
              />
              <button className='btn btn-primary join-item bg-light-green text-normal-white'>
                Subscribe
              </button>
            </div>
          </fieldset>
        </nav>
      </footer>
    </>
  );
};
export default Footer;
