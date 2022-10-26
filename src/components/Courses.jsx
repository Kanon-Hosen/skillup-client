import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    return (
        <div className='mt-16 px-28 h-full py-6'>
            <h1 className='text-center text-3xl font-bold text-slate-800 mb-8'>Featured Courses</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    courses.map(course => {
                        return (
                            <Link to={`/${course.name}`} state={course.id} key={course.id} className='cursor-pointer shadow-md rounded-3xl overflow-hidden hover:shadow-xl transition-shadow'>
                                <img src={course.img} alt="" />
                                <div className='mt-4 px-5 h-28'>
                                    <p className='font-bold text-base text-slate-800'>{course.name}</p>
                                    <p className='mt-3 text-gray-500 text-sm'>{course.short_des}</p>
                                </div>
                                <p className='px-5 pb-5 mt-4 font-bold text-xl text-teal-500'>{course.price}</p>
                            </Link>
                        )
                    })
                }
                
            </div>
        </div>
    );
};

export default Courses;