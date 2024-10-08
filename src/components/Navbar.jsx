import React, { useState } from 'react';
import { Link } from 'react-scroll';
import crop from '../assets/crop-care.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={crop} className="h-8" alt="Logo" />
      <span className="self-center text-2xl font-extrabold whitespace-nowrap text-gray-900">Crop Care</span>
    </a>
    <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
      <button type="button" className="hidden md:block text-black bg-white border-2 border-green-600 hover:text-white hover:bg-green-700 transition-colors duration-500 font-medium rounded-sm text-sm px-4 py-2 text-center">
        Get started
      </button>
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={() => setOpen(!open)} // Toggles the menu
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
    <div className={`${open ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:hover:border-b-purple-700 md:p-0"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="prize"
            smooth={true}
            duration={500}
            className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:hover:border-b-purple-700 md:p-0"
          >
            Prizes
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:hover:border-b-purple-700 md:p-0"
          >
            About
          </Link>
        </li>
      
      
      
      <li>
      <button type="button" className="block md:hidden text-black bg-white border-2 border-green-600 hover:text-white hover:bg-green-700 transition-colors duration-500 font-medium rounded-sm text-sm px-4 py-2 text-center">
        Get started
      </button>
      </li>
      
      
      </ul>

    </div>
  </div>
</nav>

  );
};

export default Navbar;
