import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
import Layout from '../navbar/Layout';
import Doctor from '../doctor/Doctor';
import baseUrl from '../../redux/base_url';
import configure from '../doctor/config';

const Homepage = () => {
  const [doctors, setDoctor] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${baseUrl}doctors/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }

        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchDoctor();
  }, []);
  if (!doctors) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home--splitter flex">
      <Layout />
      <main className="home--main">
        <div className="home--main--content flex column">
          <h1 className="main--header auth--title m-1">Welcome to World Vision Clinic</h1>
          <p className="main--text mt-3">
            Our mission is to provide quality and affordable healthcare to all.
            Feel free to book an appointment with any of our doctors today.
          </p>
        </div>
        <div className="main--doc--content flex">
          <Carousel
            autoPlay
            className="w-100"
            keyBoardControl
            responsive={configure([3, 2, 1])}
          >
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
