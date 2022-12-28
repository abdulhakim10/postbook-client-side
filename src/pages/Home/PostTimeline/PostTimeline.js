import React from 'react';
import PostCard from './PostCard';
import { RiLiveFill } from 'react-icons/ri';
import { ImImages } from 'react-icons/im';
import { FaSmile } from 'react-icons/fa';

const PostTimeline = () => {
    return (
        <div>
            <div className='my-4 rounded-lg shadow-lg border p-4'>
                <div className='flex gap-2 my-2'>
               
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    
                
                    <input type="submit" value="What's on your mind?" name="" id="" className='w-full border text-gray-400 p-1 rounded-md' placeholder="What's on your mind?" />
                    <input type="submit" className='px-2 py-1 rounded-md bg-blue-400 hover:bg-blue-500 text-white text-sm' value="Comment" />
                </div>
                <hr className='w-11/12 mx-auto my-4' />
                <div className='flex flex-wrap justify-around items-center gap-4 my-2'>
                   <div>
                   <label for="file-input" className='flex items-center gap-2'>
                        <RiLiveFill className='text-2xl text-red-600'/> Live video
                    </label>
                    <input id="file-input" type="file" className='hidden' />
                   </div>
                   <div>
                   <label for="img" className='flex items-center gap-2'>
                        <ImImages className='text-2xl text-green-600'/> Photo/video
                    </label>
                    <input id="img" type="file" accept="image/*" className='hidden' />
                   </div>
                   <div>
                   <label for="file-input" className='flex items-center gap-2'>
                        <FaSmile className='text-2xl text-orange-400'/> Feelings/activity
                    </label>
                    <input id="file-input" type="file" className='hidden' />
                   </div>
                    

                </div>
            </div>
            <PostCard />
        </div>
    );
};

export default PostTimeline;