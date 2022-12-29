import React from 'react';
import About from '../About/About';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const AboutLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <About/>
            <Footer/>
        </div>
    );
};

export default AboutLayout;