import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../redux/doctor/doctor';
import Layout from './Layout';
import Doctor from '../doctor/Doctor';

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDoctors } from '../../redux/doctor/doctor';

// const Doctors = () => {
//   const dispatch = useDispatch();
//   const doctors = useSelector((state) => state.doctors);

//   useEffect(() => {
//     dispatch(fetchDoctors());
//   }, [dispatch]);

//   return (
//     <div>
//       {doctors.map((doctor) => (
//         <div key={doctor.id}>
//           <h1>{doctor.name}</h1>
//           <h2>{doctor.specialty}</h2>
//           <h3>{doctor.location}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

const Homepage = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

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
        <div className="home--main--content">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Homepage;
