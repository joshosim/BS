import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNavbar = () => {
    setNav(!nav);
  };
  const handleClick = () => {};
  return (
    <div className="font-bold bg-[#9C9990] w-full relative">
      <div className="flex items-center justify-between px-5 py-3">
        <Link
          className={
            nav
              ? `rounded-full border-2 p-2 border-black`
              : `hidden md:block rounded-full border-2 p-2 border-black`
          }
          to=""
        >
          BS
        </Link>
        <ul
          className={
            nav
              ? `hidden md:flex md:items-center gap-5`
              : `flex flex-col items-center justify-between gap-5`
          }
        >
          <Link
            className="block md:hidden rounded-full border-2 p-2 border-black"
            to="/"
          >
            BS
          </Link>

          <div className="flex gap-2">
            <Link
              className="px-6 py-2 text-white bg-black rounded-md"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-6 py-2 text-white bg-black rounded-md"
              to="/signup"
            >
              Signup
            </Link>
          </div>

          <div
            className={
              nav
                ? `hidden md:flex md:items-center gap-5`
                : `flex flex-col items-center justify-between gap-5`
            }
          >
            <Link to="/">Home</Link>
            <Link to="/addbook">
              <FaPlus
                size={30}
                className="rounded-full border-2 border-black p-1 hover:scale-110"
                title="Add New Book"
              />
            </Link>
            <Link to="/favourite">Favourite</Link>
            <Link className="text-red-500" to="/profile"></Link>
            <button
              onClick={handleClick}
              className="px-6 py-2 text-white bg-black rounded-md"
            >
              Logout
            </button>
          </div>
        </ul>
        <AiOutlineBars
          size={30}
          className={nav ? `block md:hidden` : `hidden`}
          onClick={handleNavbar}
        />
        <AiOutlineClose
          size={30}
          className={nav ? `hidden` : `block`}
          onClick={handleNavbar}
        />
      </div>
    </div>
  );
};

export default NavBar;
