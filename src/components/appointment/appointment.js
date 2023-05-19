import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDoctorsThunk } from '../../redux/appointment/doctorsSlice';
import './sohaib.css';
import baseUrl from '../../redux/base_url';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const fromDetailsDoctorID = new URLSearchParams(location.search).get('doctor_id');
  useEffect(() => {
    dispatch(getDoctorsThunk());
  }, [dispatch]);

  const { myDoctors } = useSelector((state) => state.myDoctors);
  const doctorId = myDoctors[0];
  const userId = JSON.parse(window.localStorage.getItem('user_id'));
  const [disease, setDisease] = useState('');
  const [city, setCity] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [user, setUser] = useState(userId || 0);
  const [doctor, setDoctor] = useState(fromDetailsDoctorID || '0');

  const resetValues = () => {
    setDisease('');
    setCity('');
    setAppointmentDate('');
    setAppointmentTime('');
    setUser(userId || 0);
    setDoctor(doctorId || 0);
  };

  const token = localStorage.getItem('token');
  const createAppointment = async () => {
    const appointmentData = {
      disease,
      city,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      user_id: user,
      doctor_id: doctor,
    };

    const response = await fetch(`${baseUrl}users/${userId}/appointments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });
    let returnResponse = '';
    if (response.ok) {
      returnResponse = response.json();
    } else {
      throw new Error('Failed to create appointment');
    }
    return returnResponse;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAppointment();
      if (!response) {
        throw new Error('Failed to create appointment');
      }
      toast.success('Appointment created successfully');
      resetValues();
    } catch (error) {
      toast.error('Failed to create appointment');
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'doctor':
        setDoctor(parseInt(value, 10));
        break;
      case 'user':
        setUser(parseInt(value, 10));
        break;
      case 'disease':
        setDisease(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'appointmentDate':
        setAppointmentDate(value);
        break;
      case 'appointmentTime':
        setAppointmentTime(value);
        break;
      default:
        break;
    }
  };

  return (
    <section className="content home--splitter flex">
      <div className="form-container">
        <h2 className="page-title text-align-center">Book Doctor Appointment</h2>
        <form className="reserve-form">
          <h4 className="form-title">Fill In The Form To Book an Appointment</h4>
          <div className="form-group">
            <select name="doctor" value={doctor} onChange={handleFieldChange} className="appoint-input select">
              <option value="0" className="doctor-option">Select Doctor</option>
              {myDoctors && myDoctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="disease"
              className="doctor-input"
              placeholder="Enter Your Disease"
              value={disease}
              onChange={handleFieldChange}
              name="disease"
              data-testid="input-disease"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="city"
              className="doctor-input"
              placeholder="Enter Your Address"
              value={city}
              onChange={handleFieldChange}
              name="city"
              data-testid="input-city"
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              id="date"
              className="doctor-input select"
              placeholder="date"
              value={appointmentDate}
              onChange={handleFieldChange}
              name="appointmentDate"
              data-testid="input-date"
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              id="time"
              className="doctor-input select"
              placeholder="time for appiontment"
              value={appointmentTime}
              onChange={handleFieldChange}
              name="appointmentTime"
              data-testid="input-time"
            />
          </div>
          <div>
            <button type="submit" data-testid="button" className="doctor-submit-button" onClick={handleSubmit}>Book Appiontment</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
