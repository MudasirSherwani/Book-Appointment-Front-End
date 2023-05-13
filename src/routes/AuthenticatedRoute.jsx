import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DoctorDetails from '../components/doctorDetails/doctorDetails';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/details/:id" element={<DoctorDetails />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
