import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-8 z-40'>
            <footer className="md:px-28 px-8 py-8 bg-slate-800 text-gray-400 mx-auto text-center">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center text-semibold text-gray-50 cursor-pointer text-xl">
			<span className='text-teal-500 mr-1'>Skill </span>  Up
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<Link>Terms of Use</Link>
				</li>
				<li>
					<Link>Privacy</Link>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<Link>Instagram</Link>
			</li>
			<li>
				<Link>Facebook</Link>
			</li>
			<li>
				<Link>Twitter</Link>
			</li>
		</ul>
	</div>
</footer>
        </div>
    );
};

export default Footer;