import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;