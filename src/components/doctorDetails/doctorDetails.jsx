import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import baseUrl from '../../redux/base_url';
import Loading from '../Loading';
import '../doctor/doctor.css';
import Button from '../button';

const DetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  const handleButtonClick = async () => {
    console.log('clicked - new reservation');
  };

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
        throw new Error(error.message);
      }
    };
    fetchDoctor();
  }, [id]);

  if (!doctor) {
    return <Loading />;
  }

  return (
    <div className="main-holder">
      <section className="card details-holder container-fluid d-flex column justify-content-center align-items-center ms-auto">
        <div>
          <img id="myImage" src={doctor.image} className="card-img-top mb-2 d-doctor-image rounded" alt="img" />
        </div>
        <div className="doctor-info">
          <ul className="card-body d-flex column gap-2 justify-content-center align-items-center text-white">
            <li className="-info card-title h4">
              Name:
              {' '}
              <span>{doctor.name}</span>
            </li>
            <li className="-info card-title h4">
              Speciality:
              {' '}
              <span>{doctor.speciality}</span>
            </li>
            <li className="-info card-title h4">
              Description:
              {' '}
              <span>{doctor.description}</span>
            </li>
            <li className="-info card-title h4">
              City:
              {' '}
              <span>{doctor.city}</span>
            </li>
            <li className="-info btn">
              <Button title="Set Appointment Now" text="Appoint" event={handleButtonClick} />
            </li>
            <div className="link">
              <Link to="/" className="discover card-link rounded p-1 d-block mt-2">
                Discover more doctors
                {' '}
              </Link>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
