import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/user/Login';
import SignupForm from '../components/user/Signup';

const UnAuthenticatedRoute = () => (
  <Routes>
    <Route path="*" element={<LoginForm />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
  </Routes>
);

export default UnAuthenticatedRoute;
