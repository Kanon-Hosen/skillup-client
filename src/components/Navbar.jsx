import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
    return (
        <div className='px-28 bg-slate-800 h-16 fixed top-0 w-full left-0 flex items-center justify-between z-50'>
            <div className='font-semibold text-xl text-gray-50 cursor-pointer'>
            <Link to='/'><span className='text-teal-500'>Skill</span> Up</Link>
            </div>
            <div className='w-1/3 text-gray-50 flex items-center justify-between'>
                <NavLink className='text-sm cursor-pointer hover:underline transition-all hover:text-teal-500' to='/course'>Course</NavLink>
                <NavLink className='text-sm cursor-pointer hover:underline transition-all hover:text-teal-500' to='/faq'>FAQ</NavLink>
                <NavLink className='text-sm cursor-pointer hover:underline transition-all hover:text-teal-500' to='/blog'>Blog</NavLink>
                <NavLink className='text-sm cursor-pointer hover:underline transition-all hover:text-teal-500' to='/login'>Login</NavLink>
                <NavLink className='text-sm cursor-pointer hover:underline transition-all hover:text-teal-500 px-4 py-2 bg-teal-600 rounded-2xl' to='/register'>Sign up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;