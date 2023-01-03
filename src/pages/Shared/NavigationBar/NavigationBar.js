import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillHome, AiFillPicture, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AuthContext } from '../../../contexts/AuthProvider';
import { ImProfile } from 'react-icons/im';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const { user, newUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    // logout handler
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <header className="p-4">
                <div className="container flex justify-between items-center h-16 mx-auto">
                    <ul className={`flex flex-wrap w-full item-center md:w-1/5 md:bg-inherit bg-gray-200 text-center p-4 rounded-md md:static absolute duration-500 ease-out ${open ? 'top-[80px] left-0' : 'top-[-470px] left-0'}`}>
                        <li className=" mb-2">
                            <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">
                                <span className='hover:bg-blue-400 flex gap-2'>
                                <AiFillHome className='text-3xl text-blue-400 hover:text-blue-500 md:mb-0' />
                                <p className='md:hidden lg:hidden'>Home</p>
                                </span>
                            </Link>
                        </li>
                        <li className=" mb-2">
                            <Link rel="noopener noreferrer" to="/media" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">
                                <span className='hover:bg-blue-400 flex gap-2'>
                            <AiFillPicture className='text-3xl text-blue-400 hover:text-blue-500'/>
                            <p className='md:hidden lg:hidden'>Media</p>
                            </span>
                            </Link>
                        </li>
                        <li className=" mb-2">
                            <Link rel="noopener noreferrer" to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent"><span className='hover:bg-blue-400 flex gap-2'><ImProfile className='text-3xl text-blue-400 hover:text-blue-500' /> <p className='md:hidden lg:hidden'>About</p></span></Link>
                        </li>
                        {user?.uid &&<li className='md:hidden lg:hidden ml-4 pt-1 flex justify-start'>
                        <button onClick={handleLogOut} type="button" className=" px-3 py-1 font-semibold rounded  bg-blue-400 hover:bg-blue-500 text-white ">Logout</button>
                        </li>}
                    </ul>
                    <Link to='/' rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src="https://img.freepik.com/premium-vector/letter-pb-logo_609277-4795.jpg?w=2000" className='md:h-24 md:w-24 h-16 w-16' alt="" />
                        <h2 className="ml-0 md:text-3xl font-semibold text-lg">Postbook</h2>
                    </Link>
                    <div className="flex items-center md:space-x-4">
                        <div className="relative hidden lg:block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                    <BiSearchAlt2 className='text-xl' />
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-1.5 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-300 focus:bg-gray-300" />
                        </div>
                        {user?.uid ?
                            <button onClick={handleLogOut} type="button" className=" hidden md:block lg:block px-3 py-1 font-semibold rounded  bg-blue-400 hover:bg-blue-500 text-white ">Logout</button>
                            
                            :
                            <Link to="/login"><button type="button" className=" hidden md:block lg:block px-3 py-1 font-semibold rounded  bg-blue-400  hover:bg-blue-500 text-white">Log in</button></Link>}
                        <Link to='/about'>
                        {newUser?.photoURL ?
                            <img alt="" src={newUser?.photoURL} className="object-cover w-9 h-9 rounded-full shadow bg-gray-500 mx-2" />
                            :
                            <FaUserCircle className='text-4xl text-blue-300' />
                        }
                        </Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className='h-8 w-8 md:hidden flex'>
                        {
                            open ? <AiOutlineClose className='text-3xl' /> : <AiOutlineMenu className='text-3xl' />
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