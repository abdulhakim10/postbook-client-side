import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/Layout/Main";
import Login from "../../pages/Login-Register/Login/Login";

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
        ]
    }
])