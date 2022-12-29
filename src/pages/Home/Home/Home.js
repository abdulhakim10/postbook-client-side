import React from 'react';
// import LeftSection from '../LeftSection/LeftSection';
import PostTimeline from '../PostTimeline/PostTimeline';
// import RightSection from '../RightSection/RightSection';

const Home = () => {
    return (
        <div >
            {/* <div className='md:block hidden'>
            <LeftSection/>
            </div> */}
            <div className=' col-span-2'>
            <PostTimeline/>
            </div>
            {/* <div className='md:block hidden'>
            <RightSection/>
            </div> */}
        </div>
    );
};

export default Home;