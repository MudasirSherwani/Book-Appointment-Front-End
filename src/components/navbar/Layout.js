import { FaSignOutAlt } from 'react-icons/fa';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { CgMenuBoxed } from 'react-icons/cg';
import { Logo } from '../home/LandingPage';
import Button from '../button';
import { logout } from '../../redux/user/auth';

const Layout = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleButtonClick = () => {
    dispatch(logout());
    redirect('/');
  };

  return (
    <header className="v--header flex column">
      <div className="v--header--content flex w-100 column">
        <img src={Logo} alt="logo" className="main--logo logo" />
        {/* <CgMenuBoxed className="menu--icon" /> */}
        <nav className="flex nav--list column hide--menu">
          <NavLink to="/" exact activeClassName="active" className="nav--link">Home</NavLink>
          <NavLink to="/book-appointment" activeClassName="active" className="nav--link">New Appointment</NavLink>
          {' '}
          <NavLink to="/add-doctor" activeClassName="active" className="nav--link">New Doctor</NavLink>
          <NavLink to="/delete-doctor" activeClassName="active" className="nav--link">Delete Doctor</NavLink>
          <NavLink to="/reservations/" activeClassName="active" className="nav--link">My Appointments</NavLink>
          <NavLink to="/print/" activeClassName="active" className="nav--link">Print Appointments</NavLink>
          <Button title="Sign Out" event={handleButtonClick} text=<FaSignOutAlt /> />
        </nav>
      </div>
      <small className="v--footer hidden">
        &copy; World Vision Clinic 2023
      </small>
      <Outlet />
    </header>
  );
};

export default Layout;
