import CommentCard from './CommentCard';

const AllComments = ({post, comments}) => {

    //     queryKey: ['comments'],
    //     queryFn: async() => {
    //         const res = await fetch('https://postbook-server-side.vercel.app/comments');
    //         const data = await res.json();
    //         return data;
           
    //     }
    // })

    // const allComments = comments.filter(acm => acm.postId === post._id);
    return (
        <div>
            {
                comments?.map(comment => <CommentCard 
                    key={comment._id}
                    comment={comment}
                    />)
            }
        </div>
    );
};

export default AllComments;