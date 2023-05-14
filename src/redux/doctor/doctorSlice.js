import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from '../base_url';
// actions
const REMOVE_DOCTOR = "redux/doctor/remove";

// show all doctors
export const fetchDoctors = createAsyncThunk('GET_DOCTORS', async (thunkAPI) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.get(`${baseUrl}doctors/`, requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});
