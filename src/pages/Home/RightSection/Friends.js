import React from 'react';
import { RiMessengerLine } from 'react-icons/ri';

const Friends = () => {
    return (
        <div>
            <div className="h-full p-3 space-y-2 w-full flex justify-center">
                <div className="flex items-center p-2 space-x-4">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-sm font-semibold">Leroy Jenkins</h2>

                        <div className='btn px-2 py-1 flex items-center justify-center gap-1 rounded-md mt-1 text-white bg-blue-500'>
                            <RiMessengerLine /> <p className='text-xs'>Message</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Friends;