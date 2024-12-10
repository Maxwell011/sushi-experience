import PhoneIcon from "../svg/PhoneIcon";
import SearchIcon from "../svg/SearchIcon";
import ShoppingIcon from "../svg/ShoppingIcon";

const Nav = () => {
  return (
    <>
      <section>
        <div className="navbar bg-[#FAFAFA]">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a className="text-base">Services</a>
                </li>
                <li>
                  <a>Menu</a>
                  <ul className="p-2">
                    <li>
                      <a className="text-base">Bonus</a>
                    </li>
                    <li>
                      <a className="text-base">Gifts</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="text-base">Orders</a>
                </li>
              </ul>
            </div>
            <h1 className="flex items-center text-xl font-poppins cursor-pointer">
              <span className="w-[41px] h-[46px] rounded-[13px] bg-light-green text-neutral-50 text-[30px] flex items-center justify-center">
                S
              </span>
              <span className="text-black text-[30px] font-medium">ushi</span>
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black text-xl font-medium">
              <li>
                <a className="font-poppins text-base">Home</a>
              </li>
              <li>
                <details>
                  <summary className="text-base">Menu</summary>
                  <ul className="p-2">
                    <li>
                      <a className="text-base">Orders</a>
                    </li>
                    <li>
                      <a></a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="text-base">Offers</a>
              </li>
              <li>
                <details>
                  <summary className="text-base">Services</summary>
                  <ul className="p-2">
                    <li>
                      <a className="text-base">Gift Card</a>
                    </li>
                    <li>
                      <a className="text-base">Delivery</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="text-base">About Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-10 rounded-2xl flex gap-5">
            <SearchIcon />
            <ShoppingIcon />
            <h1 className="bg-light-green p-[10px] rounded-3xl text-neutral-50 text-base font-medium font-poppins flex items-center gap-2">
              <PhoneIcon />
              Contact
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
export default Nav;
