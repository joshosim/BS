import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="font-bold bg-[#9C9990] w-full">
      <div className="flex items-center justify-between px-5 py-3">
        <Link className="rounded-full border-2 p-2 border-black" to="/">
          BS
        </Link>
        <ul className="flex items-center gap-5">
          <Link to="/">Home</Link>
          <Link to="/favourite">Favourite</Link>
        </ul>
        <div className="flex items-center gap-5">
          <Link to="/profile">Profile</Link>
          <button>
            <Link to="/login">Logout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
