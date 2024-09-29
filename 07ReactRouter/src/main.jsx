import React from 'react'
import ReactDom from 'react-dom'
import ReactDOM from 'react-dom/client';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
//Way One of router
/*
const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [{
        path: '',
        element: <Home />
    }, {
        path: 'about',
        element: <About />
    }, {
        path: 'contact',
        element: <Contact />
    }]
}]);
*/

//Way Two of router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route path="" index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="User/:userId" element={<User />} />
                <Route
                    loader={githubInfoLoader}
                    path="github" element={<Github />} />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </ React.StrictMode>
)