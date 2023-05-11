/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReservations = createAsyncThunk('reservations/getReservations',
  async () => {
    const response = await axios.get('http://127.0.0.1:1800/users/1/appointments');
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
