import React from 'react';
import { Logo } from './home/LandingPage';

const Loading = () => (
  <div className="loader d-flex flex column">
    <img src={Logo} alt="logo" className="main--logo logo" />
    <p className="finder">Let&lsquo;s find you a doctor...</p>
  </div>
);

export default Loading;
