import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Project1 from "../components/Projects/Project1";
import Project2 from "../components/Projects/Project2";
import Project3 from "../components/Projects/Project3";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/project1',
                element: <Project1></Project1>
            },
            {
                path: '/project2',
                element: <Project2></Project2>
            },
            {
                path: '/project3',
                element: <Project3></Project3>
            },
        ]
    }
])

export default router;