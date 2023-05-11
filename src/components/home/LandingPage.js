import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import Button from '../button';
import doc from '../../assets/backgrounds/doc_stet.png';
import book from '../../assets/backgrounds/book.jpg';
import consulting from '../../assets/backgrounds/consulting.png';
import help from '../../assets/backgrounds/help.png';
import './home.css';

const ImageChanger = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImages = [doc, book, consulting, help];

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

const LandingPage = () => (
  <section className="landing--page w--100 h--100">
    { ImageChanger()}
    <div className="welcome--page flex column w--100 h--100">
      <img
        src={Logo}
        alt="world vision clinic' logo"
        className="main--logo max--100"
      />
      <h1 className="main--header">World Vision Clinic</h1>
      <Button text="Book an Appointment" />
      <div className="main--slider column flex mobile--hidden">
        <div className="main--slider--item" />
        <div className="main--slider--item" />
        <div className="main--slider--item" />
        <div className="main--slider--item" />
      </div>
    </div>
  </section>
);

export default LandingPage;
