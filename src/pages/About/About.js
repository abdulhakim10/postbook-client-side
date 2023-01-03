import React, { useContext, useEffect, useState } from 'react';
import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import ProfileInfo from './ProfileInfo';
import UpdateAboutInfo from './UpdateAboutInfo';
const About = () => {
    const {user, newUser} = useContext(AuthContext);
    // const [newUser, setNewUser] = useState(null);

    // useEffect(() => {
    //     fetch(`https://postbook-server-side.vercel.app/user?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setNewUser(data);
    //     })
    // },[user?.email])
    
    return (
        <div>
      <div>
        {/* banner */}
        <div className="w-full mx-auto h-32 md:h-72 ">
          <img
            className="w-full h-full"
            src="https://cdn.pixabay.com/photo/2022/01/24/13/51/temple-6963458__340.jpg"
            alt=""
          />
        </div>
        {/* profile */}
        <div className="w-full mx-auto flex flex-col mb-4 relative bottom-10 justify-center md:flex-row md:justify-start items-center md:w-4/5 md:mx-auto  md:bottom-36">
          <div className=" overflow-hidden border-2 rounded-full md:rounded-md bg-white  border-sky-100">

            {
                        newUser?.photoURL ?
                            <img alt="" src={newUser?.photoURL} className="object-cover w-32 h-50  shadow bg-gray-500" />
                            :
                            <FaUserCircle className='text-9xl text-blue-300' />
                    }
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-semibold md:text-white md:mx-4">
              {newUser?.displayName}
            </h2>
          </div>
          <div>
          <UpdateAboutInfo/>
          </div>
        </div>
      </div>
      <div className='flex'>
      <ProfileInfo/>
      </div>
    </div>
    );
};

export default About;