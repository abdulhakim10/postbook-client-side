import React, { useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
// import useToken from '../../../hooks/useToken';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [data, setData] = useState("");
    const { signUp, googleSignIn } = useContext(AuthContext);
    const [signupUserEmail, setSignupUserEmail] = useState("");
    // const [token] = useToken(signupUserEmail);
    const navigate = useNavigate();

    // const imageHostKey = process.env.REACT_APP_imagebb_key;


    // if(token){
    //     navigate('/');
    // }

    // signup handler with imgbb
    const handleSignup = async (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        

        // file send to imgBB
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        
        
        // const res = await fetch(url, {
        //     method: 'POST',
        //     body: formData
        // });
        // const img = await res.json();
        // const newImage = img.data.url;


            // signup with email-password and name-image
        await signUp(email, password, name);
        toast.success('User create successfully');
        reset();
        navigate('/');
        
        // send to db
        // const user = {
        //     name,
        //     email,
        //     // image: newImage,
        // }

        // fetch('https://swapcars-assignment12-server.vercel.app/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     const email = user.email
        //     setSignupUserEmail(email);
        //     // getToken(email);
        // })
    }


    // google log in handler
    const googleLogin = async() => {
    await googleSignIn();
    navigate('/');
    // .then(result => {
    //     const email = result.user.email;
    //     setSignupUserEmail(email);
    //     toast.success('Successfully logged in');
    //     const data = result.user
    //     // send to db
    //     const user = {
    //         name: data.displayName,
    //         email: data.email,
    //         image: data.photoURL,
    //         type : "Buyer"
    //     }

    //     fetch('https://swapcars-assignment12-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         const email = user.email;
    //         setSignupUserEmail(email);
    //     })
    // })
        
    }

return (
    <div className='flex justify-center'>
        <div className='w-96 p-10 border-2  border-slate-900 rounded-lg m-8'>
            <h2 className="text-3xl font-bold text-center">Sign Up</h2>
            <form className='w-full mx-auto' onSubmit={handleSubmit(handleSignup)}>

                <div className="form-control w-full max-w-xs mb-2">
                    <label className="label1">
                        <span className="label1-text">Your Name</span>
                    </label>
                    <input {...register("name", {
                        required: 'Name is required'
                    })} placeholder="Enter Your Name" type="text" className="input input-bordered w-full max-w-xs px-4 py-2 rounded-md border-2" />
                </div>
                {errors.name && <p className="text-red-600">{errors.name?.message}</p>}


                <div className="form-control w-full max-w-xs mb-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: 'Email is required'
                    })} placeholder="Email" type="email" className="input input-bordered w-full max-w-xs px-4 py-2 rounded-md border-2" />
                </div>
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}

                <div className="form-control w-full max-w-xs mb-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} placeholder="Password" type="password" className="input input-bordered w-full max-w-xs px-4 py-2 rounded-md border-2" />
                </div>


                
                <div className='w-full max-w-xs'>
                    <input type="submit" className='btn px-4 py-2 bg-slate-900 text-white rounded-md w-full max-w-xs mt-4' value='Sign Up' />
                </div>
            </form>
            <p className='mt-4'>Have an account go to <Link to='/login'><span className='text-blue-500 font-semibold'>Login</span></Link></p>
                    <div className="text-center mt-4 text-xl font-semibold">Or</div>
                    <button onClick={googleLogin} className='btn px-4 py-2 bg-slate-900 text-white rounded-md w-full max-w-xs mt-4'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
);
};

export default SignUp;