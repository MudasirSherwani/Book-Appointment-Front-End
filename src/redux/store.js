import { configureStore } from '@reduxjs/toolkit'
import reservationsReducer from '../features/reservations/reservationsSlice'
export default configureStore({
  reducer: {
    reservations: reservationsReducer,
  },
})