import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-extrabold">
            <span className="text-red-500">K</span>A<span></span>
            <span className="text-blue-500">R</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a className="text-gray-600">Blog</a>
            </li>
            <li>
              <a className="text-cyan-400">About Me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
