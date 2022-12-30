import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const CommentCard = ({comment}) => {
    return (
        <div className='border p-2 rounded-md m-1'>
            <div className='flex  gap-4'>
            { comment?.img ?
            <img alt="" className="w-9 h-9 rounded-full" src={comment?.img} />
                :
                <FaUserCircle className='text-4xl text-blue-300'/>
            }
            <div className='w-full flex items-center justify-between rounded-md'>
            <div>
            <p className='text-sm font-semibold'>{comment?.author}</p>
           <p>{comment?.comment}</p>
            </div>
           <p className='text-xs text-gray-500'>{comment?.time}</p>
            </div>
            </div>
        </div>
    );
};

export default CommentCard;