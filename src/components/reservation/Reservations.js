import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getReservations } from '../../redux/reservation/reservationsSlice';
import baseUrl from '../../redux/base_url';

function Reservations() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.reservations);
  // Fetch all doctors to get the doctor name
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

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  let content;
  if (loading === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (loading === 'idle') {
    content = data.map((reservation) => (
      <div className="col-sm-6" key={reservation.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <GetDoctorName doctorId={reservation.doctor_id} />
            </h5>
            <h5 className="card-title">{reservation.city}</h5>
            <p className="card-text">
              {' '}
              {reservation.appointment_date}
              {' '}
            </p>

          </div>
        </div>
      </div>
    ));
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return <div className="row">{content}</div>;
}

export default Reservations;
