/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../base_url';

export const getDoctorsThunk = createAsyncThunk('doctor/getDoctorsThunk', async () => {
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
    throw new Error('Failed to fetch doctors');
  }
});

const myDoctorsSlice = createSlice({
  name: 'doctors',
  initialState: { myDoctors: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(getDoctorsThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.myDoctors = action.payload;
    });
  },
});

export default myDoctorsSlice.reducer;
