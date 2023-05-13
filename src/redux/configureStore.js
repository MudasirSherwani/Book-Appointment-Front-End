import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './user/auth';

const token = localStorage.getItem('token');
const initialState = {
  auth: {
    token: token || null,
    isAuthenticated: !!token,
  },
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});
