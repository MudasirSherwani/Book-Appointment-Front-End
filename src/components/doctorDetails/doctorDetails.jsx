import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import baseUrl from '../../redux/base_url';
import Loading from '../Loading';
import '../doctor/doctor.css';

const DetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

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
      <section className="details-holder container-fluid d-flex column">
        <div>
          <img id="myImage" src={doctor.image} className="d-doctor-image rounded" alt="img" />
        </div>
        <div className="doctor-info">
          <ul>
            <li className="-info">
              NAME:
              {' '}
              <span>{doctor.name}</span>
            </li>
            <li className="-info">
              SPECIALITY:
              {' '}
              <span>{doctor.speciality}</span>
            </li>
            <li className="-info">
              DISCRIPTION:
              {' '}
              <span>{doctor.description}</span>
            </li>
            <li className="-info">
              CITY:
              {' '}
              <span>{doctor.city}</span>
            </li>
            <li className="-info">
              <button type="button">Appoint </button>
            </li>
            <div className="link">
              <Link to="/" className="discover">
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
