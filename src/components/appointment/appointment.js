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
    const [date, setDate] = useState();
    const [time, setTime] = useState();

    const newAppointment = (e) => {
        e.preventDefault();
        if (date === '') return
        const newUser = {
            date,
            doctorID,
            time,
        };
        dispatch(createAppointment(userID, newUser));
        setDate('');
        setTime('');
    };


};