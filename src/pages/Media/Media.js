
import { useQuery } from '@tanstack/react-query';

import React, { useState } from 'react';
import MediaCard from './MediaCard';


const Media = () => {
    const [like, setLike] = useState(0);

    const {data : posts = []} = useQuery({
        queryKey: ['posts'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    })

   
    return (
        <div className=''>
            
            {
                posts?.map(post => <MediaCard 
                    key={post._id}
                    post={post}
                    />)
            }
        </div>
    );
};

export default Media;