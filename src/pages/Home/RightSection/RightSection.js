import React from 'react';
import Friends from './Friends';

const RightSection = () => {
    return (
        <div>
            <h2 className="text-xl text-center font-semibold">Contacts</h2>
            <Friends/>
            <Friends/>
            <Friends/>
            <Friends/>
            <Friends/>
        </div>
    );
};

export default RightSection;