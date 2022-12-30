import React from 'react';
import PeopleUMKnCard from './PeopleUMKnCard';

const PeopleUMKn = () => {
    return (
        <div className='grid lg:grid-cols-3 my-2 md:grid-cols-3 grid-cols-1 gap-2'>
            <PeopleUMKnCard/>
            <PeopleUMKnCard/>
            <PeopleUMKnCard/>
        </div>
    );
};

export default PeopleUMKn;