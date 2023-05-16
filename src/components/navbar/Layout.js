import { FaSignOutAlt } from 'react-icons/fa';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Logo } from '../home/LandingPage';
import Button from '../button';
import { logout } from '../../redux/user/auth';

const Layout = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleButtonClick = () => {
    dispatch(logout());
    redirect('/login');
  };

  return (
    <header className="v--header flex column">
      <div className="v--header--content flex w-100 column">
        <Link to="/" className="nav--link">
          <img src={Logo} alt="logo" className="main--logo logo" />
        </Link>
        <nav className="flex nav--list column">
          <NavLink to="/home" exact activeClassName="active" className="nav--link">Available Doctors</NavLink>
          <NavLink to="/appointment/add" activeClassName="active" className="nav--link">New Appointment</NavLink>
          {' '}
          <NavLink to="/add" activeClassName="active" className="nav--link">New Doctor</NavLink>
          <NavLink to="/appointments/" activeClassName="active" className="nav--link">My Appointments</NavLink>
          <NavLink to="/signout" activeClassName="active" className="nav--link">
            <Button title="Sign Out" event={handleButtonClick} text=<FaSignOutAlt /> />
          </NavLink>
        </nav>
      </div>
      <small className="v--footer">
        &copy; World Vision Clinic 2023
      </small>
    </header>
  );
};

export default Layout;
