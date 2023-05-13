import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDoctors } from '../../redux/doctor/doctor';
import Layout from '../navbar/Layout';
import Doctor from '../doctor/Doctor';
import baseUrl from '../../redux/base_url';

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
        <div className="main--doc--content">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Homepage;
