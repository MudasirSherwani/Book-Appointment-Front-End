import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './user/auth';
import reservationsReducer from './reservation/reservationsSlice';
import doctorsReducer from './doctor/doctorSlice';
import myDoctorsSlice from './appointment/doctorsSlice';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  auth: authReducer,
  reservations: reservationsReducer,
  doctorSlice: doctorsReducer,
  myDoctors: myDoctorsSlice,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
