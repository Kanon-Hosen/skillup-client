import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";

const CourseDetails = () => {
  const location = useLocation();

  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/courses/${location.state}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [location.state]);

  return (
    <div className="">
      <section className=" text-gray-100 flex mt-16 items-center justify-center h-96 md:px-32 px-8 bg-slate-700">
        <div className=" flex flex-col items-center px-4 text-center">
          <h1 className="md:text-4xl text-2xl font-bold leading-none s">{course.name}</h1>
          <p className="px-8  text-sm mt-4">{course.short_des}</p>
          <div className="flex flex-wrap justify-center">
            <Link to='/checkout' state={course} className="px-8 py-3 m-2 md:text-lg text-sm font-semibold rounded-full bg-teal-500 text-gray-50 mt-5 hover:bg-teal-600 transition-colors">
              Enroll in course for {course.price}
            </Link>
          </div>
        </div>
          </section>
          <div className="md:px-32 px-8 mt-10 flex flex-col-reverse md:flex-row justify-between items-center py-8 gap-14">
              <div className="md:w-1/2 w-full">
              <h1 className="text-slate-800 font-bold text-xl mb-4">{course.name}</h1>
              <p className="text-base text-gray-600 ">{course.des}</p>
          <button className="mt-4 bg-teal-500 px-6 py-3 rounded-full text-gray-50 font-semibold hover:bg-teal-600 transition-colors">
            Download course details
              </button>
              </div>
              <div className="rounded-2xl overflow-hidden md:w-1/2 w-full">
                  <img src={course.img} alt="" />
              </div>
          </div>
          <div>
            <Faq></Faq>
          </div>
    </div>
  );
};

export default CourseDetails;
