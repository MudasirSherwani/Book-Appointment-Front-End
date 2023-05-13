import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddDoctor from '../components/doctor/addDoctor';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/add-doctor" element={<AddDoctor />} />

    </Routes>
  </>
);
export default AuthenticatedRoute;
