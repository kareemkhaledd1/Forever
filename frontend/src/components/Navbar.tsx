import { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" className="w-36" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 uppercase ">
          <p>Home</p>
          <hr className="w-0 border-none h-[1.5px] bg-gray-700 transition-all duration-300" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>Collection</p>
          <hr className="w-0 border-none h-[1.5px] bg-gray-700 transition-all duration-300" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>About</p>
          <hr className="w-0 border-none h-[1.5px] bg-gray-700 transition-all duration-300" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 uppercase"
        >
          <p>Contact</p>
          <hr className="w-0 border-none h-[1.5px] bg-gray-700 transition-all duration-300" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-slate-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="cart-icon"
            className="w-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[5px] w-4 text-center rounded-full leading-4 bg-red-600 text-white aspect-square text-[11px]">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt=""
          className="h-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      {/* Sidebar for small screen */}
      <aside
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all duration-200 ${
          visible ? 'w-64' : 'w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-3">
            <img
              src={assets.dropdown_icon}
              alt=""
              className="h-4 cursor-pointer rotate-180"
              onClick={() => setVisible(false)}
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-3 pl-6 border-b"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-3 pl-6 border-b"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-3 pl-6 border-b"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-3 pl-6 border-b"
          >
            Contact
          </NavLink>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
