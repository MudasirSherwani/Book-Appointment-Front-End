import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../components/home/Homepage';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
