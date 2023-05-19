/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Button from '../button';
import doc from '../../assets/backgrounds/doc_stet.png';
import help from '../../assets/backgrounds/doctorbg.jpg';
import './home.css';

const ImageChanger = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImages = [doc, help];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <img
      src={backgroundImages[imageIndex]}
      alt="world vision clinic signage"
      className="main--bg"
    />
  );
};

const LandingPage = () => {
  const redirect = useNavigate();
  const handleButtonClick = () => (redirect('/login'));

  return (
    <section className="landing--page w--100 h--100">
      { ImageChanger()}
      <div className="welcome--page flex column w--100 h--100">
        <img
          src={Logo}
          alt="world vision clinic' logo"
          className="main--logo max--100"
        />
        <h1 className="main--header">World Vision Clinic</h1>
        <Button event={handleButtonClick} text="Book an Appointment" />
      </div>
    </section>
  );
};

export { LandingPage, Logo };
