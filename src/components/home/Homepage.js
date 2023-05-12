import React from 'react';
import Layout from './Layout';
import Doctor from './Doctor';

const Homepage = () => (
  <>
    <Layout />
    <main className="home--main">
      <div className="home--main--content">
        <h1 className="main--header">Welcome to World Vision Clinic</h1>
        <p className="main--text">
          Our mission is to provide quality and affordable healthcare to all.
          Feel free to book an appointment with any of our doctors today.
        </p>
      </div>
      <div className="home--main--content">
        <Doctor />
      </div>
    </main>
  </>
);

export default Homepage;
