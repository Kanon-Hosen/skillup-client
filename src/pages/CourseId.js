import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CourseId = () => {
  const [course, setCourses] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://skillup-sigma.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [id]);
  return (
    <div className="flex justify-between w-full">
      <div className="w-40">
        <Sidebar></Sidebar>
      </div>
      <div className="grid lg:grid-cols-3  md:grid-cols-2 gap-10 lg:w-4/5 md:w-2/3 w-1/2 pr-5 py-20">
        <Link
          to={`/${course.name}`}
          state={course.id}
          key={course.id}
          className="cursor-pointer shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-shadow h-full"
        >
          <img src={course.img} alt="" />
          <div className="mt-4 px-5 lg:h-28">
            <p className="font-bold text-sm md:text-base text-slate-800">
              {course.name}
            </p>
            <p className="mt-3 text-gray-500 text-sm">{course.short_des}</p>
          </div>
          <p className="px-5 pb-5 mt-4 font-bold text-xl text-teal-500">
            {course.price}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CourseId;
