import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          // className={({ isActive }) =>
          //   isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline" : "font-semibold"
          // }
          className={({ isActive }) =>
            `relative font-semibold pb-1 after:absolute after:left-0 after:-bottom-1
    after:h-0.5 after:w-full after:bg-[#9F62F2]
   after:transition-transform after:duration-300
   ${
     isActive
       ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:scale-x-100"
       : "after:scale-x-0 hover:after:scale-x-100"
   }`
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `relative font-semibold pb-1 after:absolute after:left-0 after:-bottom-1
   after:h-0.5 after:w-full after:bg-[#9F62F2]
   after:transition-transform after:duration-300
   ${
     isActive
       ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:scale-x-100"
       : "after:scale-x-0 hover:after:scale-x-100"
   }`
          }
          to={"/apps"}
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `relative font-semibold pb-1 after:absolute after:left-0 after:-bottom-1
   after:h-0.5 after:w-full after:bg-[#9F62F2]
   after:transition-transform after:duration-300
   ${
     isActive
       ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:scale-x-100"
       : "after:scale-x-0 hover:after:scale-x-100"
   }`
          }
          to={"/installation"}
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="font-bold flex items-center gap-2 lg:ml-10">
          <img className="w-8 h-8" src={logo} alt="logo" />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end lg:mr-10">
        <Link
          to={"https://github.com/dev-muradhasan"}
          className="btn flex items-center gap-2 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          <FaGithub className="w-5 h-5" />
          <span className="font-semibold">Contribute</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
