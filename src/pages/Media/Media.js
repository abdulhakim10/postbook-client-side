
import { useQuery } from '@tanstack/react-query';
import MediaCard from './MediaCard';


const Media = () => {

    const {data : posts = []} = useQuery({
        queryKey: ['posts'],
        queryFn: async() => {
            const res = await fetch('https://postbook-server-side.vercel.app/posts');
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