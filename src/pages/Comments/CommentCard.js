import React from 'react';

const CommentCard = ({comment}) => {
    return (
        <div className='border p-2 rounded-md m-0.5'>
            <div className='flex items-center gap-2'>
            <img alt="" className="w-8 h-8 rounded-full" src={comment?.img} />
           <p>{comment?.comment}</p>
            </div>
           <small>{comment?.time}</small>
        </div>
    );
};

export default CommentCard;