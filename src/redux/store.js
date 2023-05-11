import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './appointment/reservationsSlice';

export default configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});
