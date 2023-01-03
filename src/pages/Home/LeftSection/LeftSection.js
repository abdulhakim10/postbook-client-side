import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaRegComment, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai';

const LeftSection = () => {
    const {user, newUser} = useContext(AuthContext);
    return (
        <div>
            <div className="h-full p-3 space-y-2 w-full  ">
                <div className="flex items-center p-2 space-x-4">
                {newUser?.photoURL ?
        <img alt="" src={newUser?.photoURL} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 mx-2" />
    :
    <FaUserCircle className='text-5xl text-gray-400'/>
    }
                    
                    <div>
                        <h2 className="text-lg font-semibold">{newUser?.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <Link rel="noopener noreferrer" to="" className="text-xs hover:underline dark:text-gray-400">View profile</Link>
                        </span>
                    </div>
                </div>
                <div className="divide-y divide-gray-700">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        
                        <li>
                            <Link rel="noopener noreferrer" to="" className="flex items-center p-2 space-x-3 rounded-md">
                                <BiSearchAlt2 className='text-gray-400 text-2xl'/>
                                <span>Search</span>
                            </Link>
                        </li>

                        <li>
                            <Link rel="noopener noreferrer" to="" className="flex items-center p-2 space-x-3 rounded-md">
                                <FaRegComment className='text-gray-400 text-lg'/>
                                <span>Chat</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link rel="noopener noreferrer" to="" className="flex items-center p-2 space-x-3 rounded-md">
                                <BsBookmark className='text-gray-400 text-lg'/>
                                <span>Saved</span>
                            </Link>
                        </li>

                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <Link rel="noopener noreferrer" to="" className="flex items-center p-2 space-x-3 rounded-md">
                                <AiOutlineSetting className='text-gray-400 text-xl'/>
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link rel="noopener noreferrer" to="" className="flex items-center p-2 space-x-3 rounded-md">
                                <AiOutlineLogout className='text-gray-400 text-xl'/>
                                <span>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;