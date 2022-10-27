import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import { BsCart3 } from "react-icons/bs";
import { jsPDF } from "jspdf";
const CourseDetails = () => {
  const location = useLocation();
  const downloadPdf = () => {
    const doc = new jsPDF();
    const lMargin=10; //left margin in mm
    const rMargin=15; //right margin in mm
    const pdfInMM = 210;  // width of A4 in mm
    const paragraph = course.des
    const lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
    doc.text(lMargin, 20, lines);
    
    doc.text(`${course.name}`, 10, 10,);


    doc.text(`Price: ${course.price}`, 10, 70)

    doc.save(`${course.name}`);
    
  }
  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`https://skillup-sigma.vercel.app/courses/${location.state}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [location.state]);

  return (
    <div className="">
      <section className=" text-gray-100 flex mt-16 items-center justify-center h-96 lg:px-32 md:px-10 px-8 bg-slate-700">
        <div className=" flex flex-col items-center px-4 text-center">
          <h1 className="md:text-4xl text-2xl font-bold leading-none s">
            {course.name}
          </h1>
          <p className="px-8  text-sm mt-4">{course.short_des}</p>
          <Link
            to="/checkout"
            state={course}
            className="flex flex-wrap justify-center"
          >
            <button className="px-8 py-3 m-2 md:text-lg text-sm font-semibold rounded-full bg-teal-500 text-gray-50 mt-5 hover:bg-teal-600 transition-colors flex items-center gap-3">
              <BsCart3 className="font-bold text-xl"></BsCart3>
              Enroll in course for {course.price}
            </button>
          </Link>
        </div>
      </section>
      <div className="lg:px-32 md:px-10 px-8 mt-10 flex flex-col-reverse md:flex-row justify-between items-center py-8 gap-14">
        <div className="md:w-1/2 w-full">
          <h1 className="text-slate-800 font-bold text-xl mb-4">
            {course.name}
          </h1>
          <p className="text-base text-gray-600 ">{course.des}</p>
          <button  onClick={downloadPdf}  className="mt-4 bg-teal-500 px-6 py-3 rounded-full text-gray-50 font-semibold hover:bg-teal-600 transition-colors">
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
