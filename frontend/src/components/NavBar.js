import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="font-bold bg-[#9C9990] w-full">
      <div className="flex items-center justify-between px-5 py-3">
        <Link className="rounded-full border-2 p-2 border-black" to="/">
          BS
        </Link>
        <ul className="hidden md:flex items-center gap-5">
          <Link to="/">Home</Link>
          <Link to="/favourite">Favourite</Link>
        </ul>
        <div className="hidden md:flex items-center gap-5">
          <Link to="/profile">Profile</Link>
          <button>
            <Link to="/login">Logout</Link>
          </button>
        </div>
        <AiOutlineBars size={30} className="block md:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
