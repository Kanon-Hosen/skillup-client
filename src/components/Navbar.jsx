import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/Config";
import { contextProvier } from "../Context/MainContext";
import { useContext } from "react";
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { useState } from "react";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const { logOut } = useContext(contextProvier);
  const [toggle, setToggle] = useState(false);

  const userLogOut = async () => {
    await logOut();
  };
  return (
    <div className="px-8 md:px-28 bg-slate-800 h-16 fixed top-0 w-full left-0 flex items-center justify-between z-50">
      <div className="font-semibold text-xl text-gray-50 cursor-pointer">
        <Link to="/">
          <span className="text-teal-500">Skill</span> Up
        </Link>
      </div>
      <div className={`${toggle ? ' scale-100' : ' scale-0'} flex transition-transform  md:w-2/5 w-full absolute md:relative top-16  bg-slate-700 left-0 h-96 md:flex-row md:bg-transparent md:top-0 flex-col py-8 text-gray-50 md:flex items-center justify-between md:scale-100`}>
        <NavLink
          className="text-sm cursor-pointer hover:underline transition-all hover:text-teal-500"
          to="/course"
        >
          Course
        </NavLink>
        <NavLink
          className="text-sm cursor-pointer hover:underline transition-all hover:text-teal-500"
          to="/faq"
        >
          FAQ
        </NavLink>
        <NavLink
          className="text-sm cursor-pointer hover:underline transition-all hover:text-teal-500"
          to="/blog"
        >
          Blog
        </NavLink>

        {loading ? (
          <p className="text-teal-500 text-sm font-semibold">Loading....</p>
        ) : user ? (
          <div  className="flex gap-5 items-center">
            {user.photoURL ? (
                <img
                    title={user.displayName}
                  src={user.photoURL}
                  className="tooltipImg hover:scale-105 focus:ring-teal-600 w-10 h-10 object-cover rounded-full cursor-pointer relative" alt=""
                />

            ) : (
              <p  className="font-semibold text-teal-500 text-base cursor-pointer">
                {user.displayName}
              </p>
            )}
            <div
            
              onClick={userLogOut}
              className="font-semibold text-sm py-2 px-4 bg-teal-500 text-gray-50 rounded-full cursor-pointer"
            >
              Log out
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-5">
                <NavLink
              className="text-sm cursor-pointer hover:underline transition-all hover:text-teal-500"
              to="/login"
            >
              Login
            </NavLink>
                <NavLink
              className="text-sm cursor-pointer hover:underline transition-all hover:text-teal-500 px-4 py-2 bg-teal-600 rounded-2xl"
              to="/register"
            >
              Sign up
            </NavLink>
          </div>
              )}
    <label for="Toggle1" className="inline-flex items-center space-x-3 cursor-pointer text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-teal-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
	</span>
        </label>
      </div>
      <div onClick={()=>setToggle(!toggle)} className="text-gray-50 font-semibold text-xl cursor-pointer md:hidden block">
        {
          !toggle ? <FiMenu></FiMenu> : <ImCross></ImCross>
        }
      </div>
    </div>
  );
};

export default Navbar;
