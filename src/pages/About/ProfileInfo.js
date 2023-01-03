import React, { useContext } from 'react';
import { FaAddressCard, FaPhoneSquareAlt, FaUniversity,} from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const ProfileInfo = () => {
    const {newUser} = useContext(AuthContext);
    return (
        <div className='md:flex gap-4 items-center justify-center w-11/12 mx-auto relative md:bottom-20'>
            
            <div className=''>
                <section className="bg-white h-full rounded-xl ">
                    <div className="container max-w-5xl px-4 mx-auto shadow-lg rounded-lg border bg-blue-50">
                    <div className="space-y-4 pt-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{newUser?.displayName}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">{newUser?.email}</p>
                        </div>
                        <div className="flex justify-center pt-2 space-x-4 align-center">
                        </div>
                    </div>
                        <div className="grid pb-4 gap-4 mx-4 sm:grid-cols-12">

                            <div className="relative my-5 col-span-12 px-4 space-y-6 sm:col-span-9">
                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracking-wide flex items-center"><FaUniversity className='mr-3' /> University</h3>
                                        <p className="mt-3">{newUser?.university}</p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracking-wide flex items-center"><FaAddressCard className='mr-3' /> Address</h3>
                                        <time className="text-xs tracking-wide uppercase "></time>
                                        <p className="mt-3">{newUser?.address}</p>
                                    </div>
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracking-wide flex items-center"><FaPhoneSquareAlt className='mr-3' /> Phone</h3>
                                        <time className="text-xs tracking-wide uppercase dark:text-gray-400"></time>
                                        <p className="mt-3">{newUser?.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProfileInfo;