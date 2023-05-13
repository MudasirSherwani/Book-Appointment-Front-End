import React, { useEffect, useState } from 'react';
import baseUrl from '../../redux/base_url';

function Reservations() {
  const [reserveList, setReserveList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(window.localStorage.getItem('user_id'));

    const fetchReservations = async () => {
      try {
        const response = await fetch(`${baseUrl}users/${userId}/appointments/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch reservation list');
        }

        const data = await response.json();
        setReserveList(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservations();
  }, []);

  const GetDoctorName = ({ doctorId }) => {
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
      const token = localStorage.getItem('token');

      const fetchDoctor = async () => {
        try {
          const response = await fetch(`${baseUrl}doctors/${doctorId}`, {
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
          console.error(error);
        }
      };

      fetchDoctor();
    }, [doctorId]);

    return doctor ? doctor.name : '';
  };

  const content = loading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    reserveList.map((reservation) => (
      <div className="col-sm-6" key={reservation.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <GetDoctorName doctorId={reservation.doctor_id} />
            </h5>
            <h5 className="card-title">{reservation.city}</h5>
            <p className="card-text">{reservation.appointment_date}</p>
          </div>
        </div>
      </div>
    ))
  );

  return <div className="row">{content}</div>;
}

export default Reservations;
