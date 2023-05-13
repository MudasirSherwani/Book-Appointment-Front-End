import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Logo } from '../home/LandingPage';
import Button from '../button';
// import { signOut } from '../../redux/user/user';
import { logout } from '../../redux/user/auth';

const Layout = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleButtonClick = () => {
    dispatch(logout());
    redirect('/login');
  };

  return (
    <header className="v--header dflex column">
      <Link to="/" className="nav--link">
        <img src={Logo} alt="logo" className="main--logo logo" />
      </Link>
      <nav className="dflex nav--list column">
        <NavLink to="/home" exact activeClassName="active" className="nav--link">Available Doctors</NavLink>
        <NavLink to="/appointment/add" activeClassName="active" className="nav--link">New Appointment</NavLink>
        {' '}
        <NavLink to="/appointments/" activeClassName="active" className="nav--link">My Appointments</NavLink>
        <NavLink to="/signout" activeClassName="active" className="nav--link">Sign Out</NavLink>
        <Button event={handleButtonClick} text="Sign Out" />
      </nav>
      <small className="v--footer">
        &copy; World Vision Clinic 2023
      </small>
    </header>
  );
};

export default Layout;
