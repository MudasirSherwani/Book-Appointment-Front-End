import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from '../components/home/Homepage';
import Reservations from '../components/reservation/Reservations';
import AddDoctor from '../components/doctor/addDoctor';
import DoctorDetails from '../components/doctorDetails/doctorDetails';
import DeleteDoctor from '../components/doctor/DeleteDoctor';
import BookAppointment from '../components/appointment/appointment';
import Layout from '../components/navbar/Layout';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Navigate to="/" />} />
        <Route index element={<Homepage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/delete-doctor" element={<DeleteDoctor />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Route>
    </Routes>
  </>
);
export default AuthenticatedRoute;
