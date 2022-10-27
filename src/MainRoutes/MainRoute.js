import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Blog from '../pages/Blog';
import Checkout from '../pages/Checkout';
import Course from '../pages/Course';
import CourseDetails from '../pages/CourseDetails';
import CourseId from '../pages/CourseId';
import Error from '../pages/Error';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import PrivateRoute from '../Private/PrivateRoute';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/course' element={<Course></Course>}></Route>
                <Route path='course/:name' element={<CourseDetails></CourseDetails>}></Route>
                <Route path='course/course/:name' element={<CourseDetails></CourseDetails>}></Route>
                <Route path='/courses/:id' element={<CourseId></CourseId>}></Route>
                <Route path='/courses/:id/course/:name' element={<CourseDetails></CourseDetails>}></Route>
                <Route path='/blog' element={<Blog></Blog>}></Route>
                <Route path='/faq' element={<Faq></Faq>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/profile' element={<Profile></Profile>}></Route>
                <Route path='/checkout' element={<PrivateRoute><Checkout></Checkout></PrivateRoute>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default MainRoute;