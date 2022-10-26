import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/Config";
import { contextProvier } from "../Context/MainContext";
import { useContext } from "react";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const { logOut } = useContext(contextProvier);

  const userLogOut = async () => {
    await logOut();
  };
  return (
    <div className="px-28 bg-slate-800 h-16 fixed top-0 w-full left-0 flex items-center justify-between z-50">
      <div className="font-semibold text-xl text-gray-50 cursor-pointer">
        <Link to="/">
          <span className="text-teal-500">Skill</span> Up
        </Link>
      </div>
      <div className="w-1/3 text-gray-50 flex items-center justify-between">
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
          <div className="flex gap-5 items-center">
            {user.photoURL ? (
                   <img
                    title={user.displayName}
                  src={user.photoURL}
                  className="tooltipImg hover:scale-105 focus:ring-teal-600 w-10 h-10 object-cover rounded-full cursor-pointer relative" alt=""
                />

            ) : (
              <p className="font-semibold text-teal-500 text-base cursor-pointer">
                {user.displayName}
              </p>
            )}
            <div
              onClick={userLogOut}
              className="font-semibold text-sm p-2 bg-teal-500 text-gray-50 rounded-md cursor-pointer"
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
      </div>
    </div>
  );
};

export default Navbar;
