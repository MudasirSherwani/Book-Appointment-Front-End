import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { CgMenuBoxed } from 'react-icons/cg';
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

  // Toggle Logic for menu button
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleMenuOpen = () => {
    // setIsMenuOpen(!isMenuOpen);
    setToggle(!toggle);
  };

  const handleMenuClose = () => {
    setToggle(false);
  };

  return (
    <header className="v--header flex column">
      <div className={`v--header--content flex w-100 column ${toggle ? 'open' : ''}`}>
        <img src={Logo} alt="logo" className="main--logo logo" />
        {
          toggle
            ? <AiOutlineCloseSquare className="exit-btn hide--desktop" onClick={handleMenuClose} />
            : <CgMenuBoxed className="menu--icon hide--desktop" onClick={handleMenuOpen} />
        }
        <nav className={`flex nav--list column ${toggle ? '' : 'hide--mobile'}`}>
          <NavLink to="/" exact activeClassName="active" onClick={handleMenuClose} className="nav--link">Home</NavLink>
          <NavLink to="/book-appointment" activeClassName="active" onClick={handleMenuClose} className="nav--link">New Appointment</NavLink>
          {' '}
          <NavLink to="/add-doctor" activeClassName="active" onClick={handleMenuClose} className="nav--link">New Doctor</NavLink>
          <NavLink to="/delete-doctor" activeClassName="active" onClick={handleMenuClose} className="nav--link">Delete Doctor</NavLink>
          <NavLink to="/reservations/" activeClassName="active" onClick={handleMenuClose} className="nav--link">My Appointments</NavLink>
          <Button title="Sign Out" event={handleButtonClick} onClick={handleMenuClose} text=<FaSignOutAlt /> />
          <AiOutlineCloseSquare className="exit-btn hide--desktop" onClick={handleMenuClose} />
        </nav>
      </div>
      <small className="v--footer hide--mobile">
        &copy; World Vision Clinic 2023
      </small>
      <Outlet />
    </header>
  );
};

export default Layout;
