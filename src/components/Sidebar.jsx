import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://skillup-sigma.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="bg-slate-600 w-44 h-screen fixed top-16 left-0 flex items-center justify-center p-4 z-10 flex-col">
      {categories.map((category) => {
        return (
          <Link
            to={`/course/${category.id}`}
            className="text-sm font-semibold text-gray-50 hover:text-teal-500 my-2"
            key={category.id}
          >
            {category.category}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
