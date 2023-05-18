/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl from '../base_url';

export const getReservations = createAsyncThunk('reservations/getReservations',
  async () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(window.localStorage.getItem('user_id'));
    const response = await axios.get(`${baseUrl}users/${userId}/appointments/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  });

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReservations.pending, (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(getReservations.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload;
        state.loading = 'idle';
      }
    });
    builder.addCase(getReservations.rejected, (state) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = 'Error occured';
      }
    });
  },
});
export default reservationsSlice.reducer;
