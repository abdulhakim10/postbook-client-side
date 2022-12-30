import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSection from '../Home/LeftSection/LeftSection';
import RightSection from '../Home/RightSection/RightSection';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <div className='sticky top-0 bg-white'>
                
            <NavigationBar/>
            </div>
            <div className='md:grid lg:grid grid-cols-4 gap-4 m-4'>
            <div className='md:block lg:block hidden'>
            <LeftSection/>
            </div>
            <div className=' col-span-2'>
            <Outlet/>
            </div>
            <div className='md:block lg:block hidden'>
            <RightSection/>
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default Main;