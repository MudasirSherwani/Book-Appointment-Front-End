import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDoctors } from '../../redux/doctor/doctor';
import Layout from '../navbar/Layout';
import Doctor from '../doctor/Doctor';

const Homepage = () => {
  // const dispatch = useDispatch();
  // const doctors = useSelector((state) => state.doctors);
  const doctors = [
    {
      name: 'Dr. John Doe', city: 'Lagos', description: 'hello man', speciality: 'Dentist', id: 1,
    },
    {
      name: 'Dr. John Doe', city: 'Lagos', description: 'hello man', speciality: 'Dentist', id: 2,
    },
    {
      name: 'Dr. John Doe', city: 'Lagos', description: 'hello man', speciality: 'Dentist', id: 3,
    },
    {
      name: 'Dr. John Doe', city: 'Lagos', description: 'hello man', speciality: 'Dentist', id: 4,
    },
  ];

  // useEffect(() => {
  //   dispatch(fetchDoctors());
  // }, [dispatch]);

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
