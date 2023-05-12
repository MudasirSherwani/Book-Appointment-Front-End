import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Reservations from '../components/reservation/Reservations';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
