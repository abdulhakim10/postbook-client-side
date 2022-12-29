import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import AboutLayout from "../../pages/Layout/AboutLayout";
import Main from "../../pages/Layout/Main";
import Login from "../../pages/Login-Register/Login/Login";
import SignUp from "../../pages/Login-Register/Signup/Signup";
import Media from "../../pages/Media/Media";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
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
                element: <Media/>
            },
            
        ]
    },
    {
        path: '/about',
        element: <AboutLayout/>
    }
])