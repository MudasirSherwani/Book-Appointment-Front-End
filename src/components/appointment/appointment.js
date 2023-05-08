import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../redux/appointment/appointment';


const BookAppointment = () => {
    const dispatch = useDispatch();
    const doctor = useSelector((state) => state.doctorReducer);
    const { userid } = JSON.parse(window.localStorage.getItem('BookDoctorUser'));
    const userID = userid || 1;
    const { payload } = doctor;

}