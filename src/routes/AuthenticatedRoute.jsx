import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/login" element={<Navigate to="/" />} />
    </Routes>
  </>
);
export default AuthenticatedRoute;
