import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <Link to='/'>
          <a href="/" className="btn btn-ghost normal-case text-2xl font-extrabold">
            <span className="text-red-500">K</span>A<span></span>
            <span className="text-blue-500">R</span>
          </a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold">
          <Link to="/">
              <li>
                <a href="/" className="text-red-500">Home</a>
              </li>
            </Link>
            <Link to="/blog">
              <li>
                <a href="/blog" className="text-black">Blog</a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                {" "}
                <a href="/about" className="text-blue-500">About Me</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
