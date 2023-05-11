import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservation/reservationsSlice';

export default configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
});
