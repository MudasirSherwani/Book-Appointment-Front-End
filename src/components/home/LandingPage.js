import React from 'react';
import Logo from '../../assets/logo.svg';
import Button from '../button';
import doc from '../../assets/backgrounds/doc_stet.jpg';
// import book from '../../assets/backgrounds/book.jpg';
// import consulting from '../../assets/backgrounds/consulting.jpg';
// import help from '../../assets/backgrounds/help.jpg';

// const backgroundImages = [doc, book, consulting, help];

// const randomBackground = () => (
//   // backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
// )

const LandingPage = () => (
  <section className="landing--page">
    <img src={doc} alt="doctor" className="landing--page--background" />
    <div className="welcome--page flex column">
      <img src={Logo} alt="world vision clinic' logo" />
      <h1 className="main--header">World Vision Clinic</h1>
      <Button text="Book an Appointment" />
      <div className="main--slider column flex">
        <div className="main--slider--item" />
        <div className="main--slider--item" />
        <div className="main--slider--item" />
        <div className="main--slider--item" />
      </div>
    </div>
  </section>
);

export default LandingPage;
