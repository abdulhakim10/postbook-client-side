import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
        <header className="p-4">
	<div className="container flex justify-between items-center h-16 mx-auto">
		<ul className={`md:flex w-full h-96 md:w-1/5 md:bg-inherit bg-gray-200 text-center p-2 rounded-md md:static absolute duration-500 ease-out ${open ? 'top-[100px] left-0' : 'top-[-470px] left-0'}`}>
			<li className="flex justify-center">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</Link>
			</li>
			<li className="flex justify-center">
				<Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Media</Link>
			</li>
			<li className="flex justify-center">
				<Link rel="noopener noreferrer" to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</Link>
			</li>
		</ul>
		<Link rel="noopener noreferrer" to="" aria-label="Back to homepage" className="flex items-center p-2">
            <img src="https://img.freepik.com/premium-vector/letter-pb-logo_609277-4795.jpg?w=2000" className='md:h-24 md:w-24 h-16 w-16' alt="" />
            <h2 className="ml-0 md:text-3xl font-semibold text-lg">Postbook</h2>
		</Link>
		<div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                        <BiSearchAlt2 className='text-xl'/>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-300 focus:bg-gray-300" />
			</div>
			<Link to="/login"><button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block bg-blue-400 text-white">Log in</button></Link>
		</div>
        <div onClick={() => setOpen(!open)} className='h-8 w-8 md:hidden flex'>
            {
                open ? <AiOutlineClose className='text-2xl'/> : <AiOutlineMenu className='text-2xl'/>
            }
            </div>
		{/* <button title="Open menu" type="button" className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button> */}
	</div>
</header>
        </div>
    );
};

export default NavigationBar;