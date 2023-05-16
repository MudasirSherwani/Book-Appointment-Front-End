import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { getReservations } from '../../redux/reservation/reservationsSlice';
import baseUrl from '../../redux/base_url';
import './reservation.css';

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
    content = data.map((reservation, index) => (
      <tr key={reservation.id}>
        <td>
          { index + 1}
          {' '}
        </td>
        <td>
          <GetDoctorName doctorId={reservation.doctor_id} />
          {' '}
        </td>
        <td>
          {reservation.city}
          {' '}
        </td>
        <td>
          {reservation.appointment_date}
          {' '}
        </td>
      </tr>
    ));
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }
  return (
    <>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold title">
              Reservations
            </h2>
            <form className="form w-100">
              <table className="table">
                <thead>
                  <tr>
                    <th>Res. No</th>
                    <th>Doctor Name</th>
                    <th>City</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {content}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Reservations;
