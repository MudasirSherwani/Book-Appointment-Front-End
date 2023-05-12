import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/user/Login';
import SignupForm from '../components/user/Signup';
// import Home from '../components/home/Home';
import { LandingPage } from '../components/home/LandingPage';

const UnAuthenticatedRoute = () => (
  <Routes>
    <Route path="/" index element={<LandingPage />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
  </Routes>
);

export default UnAuthenticatedRoute;
