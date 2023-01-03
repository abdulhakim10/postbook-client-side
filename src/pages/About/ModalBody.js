import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const ModalBody = ({setShowModal}) => {
    const {user,  newUser} = useContext(AuthContext);
    const {register, handleSubmit, reset} = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_key;

    function refreshPage() {
        window.location.reload(false);
      }

    const handlePUpdate = async(data) => {
        const name = data.name;
        const address = data.address;
        const phone = data.phone;
        const university = data.university;
        const bio = data.bio;
       

        // file send to imgBB
        const image = data?.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        
        
        const res = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const img = await res.json();
        const newImage = img?.data?.url;
        console.log(newImage);

        console.log(name, address, university, bio, newImage, phone)

        // send to db
        const updatedProfile = {
            displayName: name,
            address,
            phone,
            university,
            bio,
            photoURL: newImage
        }
        
        fetch(`https://postbook-server-side.vercel.app/update?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.acknowledged === true){
            toast.success('Updated successfully!');
            setShowModal(false);
            refreshPage();
        }
      });
      reset();
    }
    return (
        <div>
            <section className="">
                <form onSubmit={handleSubmit(handlePUpdate)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-blue-100">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Profile</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="name" className="text-sm">Name</label>
                                <input {...register('name',{
                                value: `${newUser?.displayName}`
                                })} 
                                
                                id="name" type="text" placeholder="name" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 " />
                            </div>
                            
                            <div className="col-span-full">
                                <label for="address" className="text-sm">Address</label>
                                <input {...register('address', {
                                value: `${newUser?.address}`
                                })} id="address" type="text" placeholder="" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 " />
                            </div>
                            <div className="col-span-full">
                                <label for="phone" className="text-sm">Phone</label>
                                <input {...register('phone', {
                                value: `${newUser?.phone}`
                                })} id="phone" type="text" placeholder="" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 " />
                            </div>
                            <div className="col-span-full">
                                <label for="university" className="text-sm">University</label>
                                <input {...register('university', {
                                value: `${newUser?.university}`
                                })} id="university" type="text" placeholder="" className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 " />
                            </div>
                            <div className="col-span-full">
                                <label for="bio" className="text-sm">Bio</label>
                                <textarea {...register('bio', {
                                value: `${newUser?.bio}`
                                })} id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 ">
                                </textarea>
                            </div>

                            <div>
                                <label for='img' className='flex items-center gap-2'>
                                    Photo
                                </label>
                                <input {...register('img', {
                                value: `${newUser?.photoURL}`
                                })} id="img" type="file" accept="image/*" className='' />
                            </div>
                        </div>
                    </fieldset>
                    <button 
                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-blue-600 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"

                    >
                        Save Changes
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ModalBody;