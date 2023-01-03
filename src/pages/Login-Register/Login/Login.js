import React, {  useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
// import useToken from '../../../hooks/useToken';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loginError, setLoginError] = useState("");
    // const [loginUserEmail, setLoginUserEmail] = useState("");
    // const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    // login handler
    const handleLogin = async (data) => {
        const email = data.email;
        const password = data.password;

        setLoginError("");

        try {
           await logIn(email, password);
        //    await setLoginUserEmail(email);
           toast.success('Successfully logged in');
           navigate(from, { replace: true });
        }
        catch (error) {
            console.log(error.message);
            setLoginError(error.message);
        }
        reset();

        
    }


    // google log in handler
    const googleLogin = async() => {
        await googleSignIn()
        .then(result => {
            // const email = result.user.email;
            // setSignupUserEmail(email);
            toast.success('Successfully logged in');
            const data = result.user
            // send to db
            const user = {
                displayName: data.displayName,
                email: data.email,
            }
    
            fetch('https://postbook-server-side.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // const email = user.email;
                // setSignupUserEmail(email);
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e)
                navigate(from, { replace: true });
            })
        })
            
        }
    return (
        <div className='flex justify-center'>
            <div className='w-96 p-10 border-2  border-slate-900 rounded-lg m-8'>
                <h2 className="text-3xl font-bold text-center">Login</h2>
                <form className='w-full mx-auto' onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: 'Email is required'
                        })} placeholder="Email" type="email" className="input input-bordered w-full max-w-xs px-4 py-2 rounded-md border-2" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password")} placeholder="Password" type="password" className="input input-bordered w-full max-w-xs px-4 py-2 rounded-md border-2" />
                    </div>
                    {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    <div className='p-2'>
                        {loginError && <p className="text-red-600">{loginError}</p>}
                    </div>
                    <div className='w-full max-w-xs'>
                        <input type="submit" className='btn px-4 py-2 bg-slate-900 text-white rounded-md w-full max-w-xs mt-6' value='Login' />

                    </div>
                    
                </form>
                <p className='mt-4'>New to Postbook? Please <Link to='/signup'><span className='text-blue-500 font-semibold'>Create New Account</span></Link></p>
                <div className="text-center mt-4 text-xl font-semibold">Or</div>
                <button onClick={googleLogin} className='btn px-4 py-2 bg-slate-900 text-white rounded-md w-full max-w-xs mt-4'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;