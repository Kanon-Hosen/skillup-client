import React from 'react';
import Courses from '../components/Courses';
import Sidebar from '../components/Sidebar';

const Course = () => {
    return (
        <div className='flex justify-between'>
            <div className='md:w-60 w-40'>
            <Sidebar></Sidebar>
            </div>
            <div className='w-full'>
            <Courses></Courses>
            </div>
        </div>
    );
};

export default Course;