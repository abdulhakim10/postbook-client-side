import React, { useContext, useEffect, useState } from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import moment from 'moment/moment';
import { toast } from 'react-hot-toast';
import AllComments from '../Comments/AllComments';
import { FaUserCircle } from 'react-icons/fa';
import { BsShare, BsBookmark } from 'react-icons/bs';




const MediaCard = ({ post }) => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [like, setLike] = useState(0);
    const [click, setClick] = useState(false);

    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch(`https://postbook-server-side.vercel.app/comments/${post._id}`)
        .then(res => res.json())
        .then(data => {
            setComments(data)
        })
    },[comments, post._id])

    // like handler
    const handleLike = () => {
        setLike(like + 1)

        const likeInfo = {
            email: user.email,
            name: user.displayName,
            postId: post._id,
            like
        }
        console.log(likeInfo)


        // send to db
        fetch('https://postbook-server-side.vercel.app/likes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(liked => {
                console.log(liked)
                if (liked.acknowledged === true) {
                    toast.success('Liked..!')
                    setClick(true)
                }
            })
    }

    useEffect(() => {
        fetch(`https://postbook-server-side.vercel.app/likes/${post._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLike(data.length)
            })
    }, [post._id])

    // comment handler
    const handleComment = data => {
        const comment = data.comment;
        console.log(comment)

        const time = moment().format('MMMM Do YYYY, h:mm:ss a');

        const postComment = {
            author: user.displayName,
            email: user.email,
            img: user.photoURL,
            comment,
            time,
            postId: post._id
        }

        console.log(postComment)
        fetch('https://postbook-server-side.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postComment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset();
                toast.success('Comment added successfully..!')
            })
            .catch(e => console.error(e));

    }

    return (
        <div>
            <div className="flex flex-col max-w-full p-6 space-y-6 overflow-hidden rounded-lg shadow-lg border mb-4">
                <div className="flex items-center space-x-4">
                    {
                        post?.authorImg ?
                            <img alt="" src={post?.authorImg} className="object-cover w-14 h-14 rounded-full shadow bg-gray-500" />
                            :
                            <FaUserCircle className='text-6xl text-blue-300' />
                    }

                    <div className="flex flex-col space-y-1">
                        <span rel="noopener noreferrer" className="text-sm font-semibold">{post?.author}</span>
                        <span className="text-xs text-gray-400">{post?.time}</span>
                    </div>
                </div>
                <p>{post?.text}</p>
                <div className={`${post.img ? "block" : "hidden"}`}>
                    <img src={post?.img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">

                            <BsShare className='text-blue-500' />
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">

                            <BsBookmark className='text-blue-500' />
                        </button>
                    </div>
                    <div className="flex space-x-2 text-md font-medium text-gray-500">

                        <button type="button" className="flex items-center p-1 space-x-1.5">
                            <FaRegComment className='text-2xl text-blue-500' />
                            <p>{comments.length}</p>
                        </button>

                        {click === false ?
                            <><button onClick={handleLike} type="button" className={`flex items-center p-1 space-x-1.5 `}>
                                <BiLike className='text-2xl text-blue-500' />
                                <span>{like}</span>
                            </button>
                            </>
                            :
                            <>
                                <button type="button" className="flex items-center p-1 space-x-1.5">
                                    <BiDislike className='text-2xl text-blue-500' />
                                    <span>{like}</span>
                                </button>
                            </>
                        }
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleComment)} className='flex gap-2'>
                    <input {...register('comment', {
                        required: 'write something'
                    })} type="text" placeholder="Add a comment..." className="w-full rounded text-sm p-2 border" />
                    <input type="submit" className='px-2 py-1 rounded-md bg-blue-400 hover:bg-blue-500 text-white text-sm' value="Comment" />
                </form>
                <AllComments 
                comments={comments}
                post={post} />
            </div>
        </div>
    );
};

export default MediaCard;