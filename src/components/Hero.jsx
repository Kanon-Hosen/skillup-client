import React from "react";
import { Link } from "react-router-dom";
import BG from "../image/bg.png";
const Hero = () => {
  return (
    <div className="h-full w-full mt-16 ">
      <div className=" w-full h-96 overflow-hidden">
        <img
          className=" w-full h-full bg-center bg-cover object-cover"
          src={BG}
          alt=""
        />
      </div>
      <div className="absolute top-16 w-full h-96 flex items-center justify-center bg-gray-900 bg-opacity-40">
        <section className=" text-gray-100">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold leading-none">
            Coding and design courses
            </h1>
            <p className=" mt-3 mb-6 text-sm font-semibold">
            Learn programming technologies like HTML & CSS, Javascript, React and more.
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 text-basae font-semibold rounded-full bg-teal-500 text-gray-50 ">
                <Link to='/course'>
                View Courses                
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
