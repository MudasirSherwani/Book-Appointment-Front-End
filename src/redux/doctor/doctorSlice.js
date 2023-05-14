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

// remove a doctor
export const removeDoctor = createAsyncThunk(REMOVE_DOCTOR, async (id, thunkAPI) => {
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.delete(`${baseUrl}doctors/${id}`, requestOptions);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const initialState = {
  doctors: [],
  isLoading: false,
  success: false,
  error: '',
  doctor: null,
  response: null,
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (reduce) => {
 
  },
});

