import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import AboutLayout from "../../pages/Layout/AboutLayout";
import Main from "../../pages/Layout/Main";
import Login from "../../pages/Login-Register/Login/Login";
import SignUp from "../../pages/Login-Register/Signup/Signup";
import Media from "../../pages/Media/Media";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/media',
                element: <PrivateRoute><Media/></PrivateRoute>
            },
            
        ]
    },
    {
        path: '/about',
        element: <PrivateRoute><AboutLayout/></PrivateRoute>
    },
])