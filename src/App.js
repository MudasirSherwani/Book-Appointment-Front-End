import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnAuthenticatedRoute from './routes/UnAuthenticatedRoute';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App w--100 h--100">
      <ToastContainer theme="colored" position="bottom-center" />
      {!isAuthenticated ? (
        <UnAuthenticatedRoute />
      ) : (
        <AuthenticatedRoute />
      )}
    </div>
  );
}

export default App;
