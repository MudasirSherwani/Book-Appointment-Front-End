import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../redux/appointment/appointment';

const BookAppointment = () => {
  const dispatch = useDispatch();
  const doctordata = useSelector((state) => state.doctorReducer);
  const { userid } = JSON.parse(window.localStorage.getItem('BookDoctorUser'));
  const userID = userid || 1;
  const { payload } = doctordata;
  const doctorID = payload?.doctor.id;
  const [disease, setDisease] = useState();
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const newAppointment = (e) => {
    e.preventDefault();
    if (date === '') return;
    const newUser = {
      disease,
      city,
      date,
      time,
      doctorID,
    };
    dispatch(createAppointment(userID, newUser));
    setDisease('');
    setCity('');
    setDate('');
    setTime('');
  };
  return (
    <section>
      <h2>Book Doctor Appiontment</h2>
      { payload ? (
        <ul>
          <li>
            <p>Doctor name: </p>
            <p>{payload.doctor.name}</p>
          </li>
          <li>
            <p>Doctor address: </p>
            <p>{payload.doctor.city}</p>
          </li>
        </ul>
      )
        : <h4>Kindly Go back to doctors list to select your favourite doctor</h4>}
      <form onSubmit={newAppointment}>
        <div>
          <h3>Fill In The Form To Book Appiontment</h3>
          <input
            type="text"
            placeholder="Enter Your Disease"
            value={disease}
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            value={city}
          />
          <input
            type="date"
            id="date"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <input
            type="time"
            id="date"
            placeholder="time for appiontment"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <div>
          <button type="submit">Book Appiontment</button>
        </div>
      </form>
    </section>
  );
};

export default BookAppointment;
