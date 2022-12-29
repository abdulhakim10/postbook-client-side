// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CommentCard from './CommentCard';

const AllComments = ({post}) => {

    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/comments')
        .then(res => res.json())
        .then(data => {
            setComments(data)
        })
    },[comments])
    // const {data : comments = []} = useQuery({
    //     queryKey: ['comments'],
    //     queryFn: async() => {
    //         const res = await fetch('http://localhost:5000/comments');
    //         const data = await res.json();
    //         return data;
           
    //     }
    // })

    const allComments = comments.filter(acm => acm.postId === post._id);
    return (
        <div>
            {
                allComments?.map(comment => <CommentCard 
                    key={comment._id}
                    comment={comment}
                    />)
            }
        </div>
    );
};

export default AllComments;