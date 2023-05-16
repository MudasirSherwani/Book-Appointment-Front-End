import { React, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import baseUrl from '../../redux/base_url';
import './doctorDetails.css';
import doctorbg from '../../assets/backgrounds/doctorbg.jpg';

const DetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${baseUrl}doctors/${id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch doctor');
        }

        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchDoctor();
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  const handleAppointmentClick = () => {
    navigate(`/book-appointment?doctor_id=${doctor.id}`);
  };
  return (
    <div className="main-container">
      <img src={doctorbg} alt="doctor" className="doctor-bg" />
      <section className="details-container">
        <div className="doctor-image">
          <img id="myImage" src={doctor.image} className="d-doctor-image" alt="Doctor" />
        </div>
        <div className="doctor-info">
          <h1 className="name">{doctor.name}</h1>
          <ul>
            <li className="speciality">
              <span>SPECIALITY:</span>
              {' '}
              {doctor.speciality}
            </li>
            <li className="description">
              <span>DESCRIPTION:</span>
              {' '}
              {doctor.description}
            </li>
            <li className="city">
              <span>CITY:</span>
              {' '}
              {doctor.city}
            </li>
          </ul>
          <button type="button" onClick={handleAppointmentClick}>Appoint</button>
          <div className="link">
            <Link to="/" className="discover-more">
              Discover more doctors
              {' '}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
