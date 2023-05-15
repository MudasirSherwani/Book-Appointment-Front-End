/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../base_url';

export const getDoctorsThunk = createAsyncThunk('doctors/getDoctorsThunk', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${baseUrl}doctors`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = response.data ?? [];
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch doctors');
  }
});

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: { doctors: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(getDoctorsThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.doctors = action.payload;
    });
  },
});

export default doctorsSlice.reducer;

// const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

// export const createNewAppointment = async (userid, datareserve) => {
//   const {
//     disease, city, appointmentDate, appointmentTime, doctorID,
//   } = datareserve;
//   const UserId = `${userid}`;
//   const reservation = {
//     disease,
//     city,
//     appointmentDate,
//     appointmentTime,
//     user: UserId,
//     doctor: doctorID,
//   };
//   const token = localStorage.getItem('token');
//   const resp = await fetch(`${baseUrl}users/${userid}/appointments`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       reservation,
//     }),
//   });
//   const data = await resp.text();
//   return data;
// };

// export const createAppointment = (userid, data) => async (dispatch) => {
//   const appiontment = await createNewAppointment(userid, data);
//   dispatch({
//     type: CREATE_APPOINTMENT,
//     payload: appiontment,
//   });
// };
