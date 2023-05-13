import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Reservations from '../components/reservation/Reservations';
import AddDoctor from '../components/doctor/addDoctor';
import DoctorDetails from '../components/doctorDetails/doctorDetails';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/add-doctor" element={<AddDoctor />} />
      <Route path="/details/:id" element={<DoctorDetails />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
