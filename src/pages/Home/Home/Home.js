import React from 'react';
import PeopleUMKn from '../PepoleUMKn/PeopleUMKn';
import PostTimeline from '../PostTimeline/PostTimeline';

const Home = () => {
    return (
        <div >
            {/* <div className='md:block hidden'>
            <LeftSection/>
            </div> */}
            <div className=' col-span-2'>
            <PostTimeline/>
            </div>
            <PeopleUMKn/>
            {/* <div className='md:block hidden'>
            <RightSection/>
            </div> */}
        </div>
    );
};

export default Home;