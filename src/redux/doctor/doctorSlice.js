import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from '../base_url';
// actions
const REMOVE_DOCTOR = "redux/doctor/remove";