import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/Layout/Main";
import Login from "../../pages/Login-Register/Login/Login";
import SignUp from "../../pages/Login-Register/Signup/Signup";

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
        ]
    }
])