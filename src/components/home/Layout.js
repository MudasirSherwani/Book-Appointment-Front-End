import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './LandingPage';

const Layout = () => (
  <header className="v--header dflex column">
    <img src={Logo} alt="logo" className="main--logo logo" />
    <nav className="v--nav">
      <ul className="dflex nav--list column">
        <li>
          <Link to="/doctors" className="nav--link">Available Doctors</Link>
        </li>
        <li>
          <Link to="/appointment/index" className="nav--link">My Appointment</Link>
        </li>
        <li>
          <Link to="/appointment/new" className="nav--link">New Appointment</Link>
        </li>
        <li>
          <Link to="/signout" className="nav--link">Sign Out</Link>
        </li>
      </ul>
    </nav>
    <small className="v--footer">
      &copy; World Vision Clinic 2023
    </small>
  </header>
);

export default Layout;
