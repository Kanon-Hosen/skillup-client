import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const course = useLoaderData();
  console.log(
    "🚀 ~ file: AllCourses.jsx ~ line 7 ~ AllCourses ~ course",
    course
  );
  // console.log("🚀 ~ file: Courses.jsx ~ line 8 ~ Courses ~ courses", courses);
  useEffect(() => {
    fetch("https://skillup-sigma.vercel.app/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => {
        return (
          <div className="mt-16 lg:px-28 px-12 h-full py-6">
            <h1 className="text-center md:text-3xl text-2xl font-bold text-slate-800 mb-8">
              Featured Courses
            </h1>
            <div className="grid lg:grid-cols-3 gri md:grid-cols-2 gap-10">
              <Link
                to={`course/${course.name}`}
                state={course.id}
                key={course.id}
                className="cursor-pointer shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-shadow h-full"
              >
                <img src={course.img} alt="" />
                <div className="mt-4 px-5 lg:h-28">
                  <p className="font-bold text-sm md:text-base text-slate-800">
                    {course.name}
                  </p>
                  <p className="mt-3 text-gray-500 text-sm">
                    {course.short_des}
                  </p>
                </div>
                <p className="px-5 pb-5 mt-4 font-bold text-xl text-teal-500">
                  {course.price}
                </p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllCourses;
