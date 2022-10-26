import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='bg-slate-600 w-44 h-screen fixed top-16 left-0 flex items-center justify-center p-4 z-10'>
            <div className='flex gap-5 text-gray-50 font-semibold flex-col'>
                <Link className='hover:text-teal-500 hover:underline cursor-pointer transition-colors text-sm'>All</Link>
                <Link className='hover:text-teal-500 hover:underline cursor-pointer transition-colors text-sm'>Html & Css</Link>
                <Link className='hover:text-teal-500 hover:underline cursor-pointer transition-colors text-sm'>JavaScript</Link>
                <Link className='hover:text-teal-500 hover:underline cursor-pointer transition-colors text-sm'>React Js</Link>
                <Link className='hover:text-teal-500 hover:underline cursor-pointer transition-colors text-sm'>Full stack</Link>
            </div>
        </div>
    );
};

export default Sidebar;