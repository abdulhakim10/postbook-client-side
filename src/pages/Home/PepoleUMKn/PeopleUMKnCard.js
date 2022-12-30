import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PeopleUMKnCard = () => {
    return (
        <div>
            <div class="w-full  overflow-hidden bg-white rounded-lg shadow-lg border my-2">
                <img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

                <div class=" text-center">
                    <Link to='' class="block text-xl font-semibold text-gray-800 " tabindex="0" role="link">John Doe</Link>
                    <div className='flex items-center justify-center gap-6 py-4 px-2'>
                        <div className='btn px-2 py-1 flex items-center justify-center rounded-md mt-1 text-white bg-blue-500'>
                          <MdPersonAddAlt1 className='text-xs'/> <p className='text-xs'>Add Friend</p>
                        </div>
                        <div className='btn px-3 py-1 flex items-center justify-center gap-1 text-xs rounded-md mt-1 text-white bg-gray-400'>
                        <AiOutlineClose/><p className='text-xs'>Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleUMKnCard;