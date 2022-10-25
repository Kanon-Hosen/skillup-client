import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='px-20 bg-slate-800 h-16 fixed top-0 w-full left-0 flex items-center justify-between'>
            <div>
            Skill Up 
            </div>
            <div>
                <NavLink to='/course'>Course</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Sign up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;