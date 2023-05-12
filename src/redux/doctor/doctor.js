import Applet from '../api';

// Action Types:
export const FETCH_DOCTORS = 'FETCH_DOCTORS';
export const FETCH_DOCTOR = 'FETCH_DOCTOR';
export const CREATE_DOCTOR = 'CREATE_DOCTOR';
export const UPDATE_DOCTOR = 'UPDATE_DOCTOR';
export const DELETE_DOCTOR = 'DELETE_DOCTOR';

// Action Creators:
export const fetchDoctors = () => (dispatch) => {
  Applet.fetchDoctors((data) => {
    if (data.message) {
      dispatch({
        type: FETCH_DOCTORS,
        payload: data.message,
      });
    } else {
      dispatch({
        type: FETCH_DOCTORS,
        payload: data,
      });
    }
  });
};

export const fetchDoctor = (id) => (dispatch) => {
  Applet.fetchDoctor(id, (data) => {
    if (data.message) {
      dispatch({
        type: FETCH_DOCTOR,
        payload: data.message,
      });
    } else {
      dispatch({
        type: FETCH_DOCTOR,
        payload: data,
      });
    }
  });
};

export const createDoctor = (doctor, userId) => (dispatch) => {
  Applet.createDoctor(doctor, userId, (data) => {
    if (data.message) {
      dispatch({
        type: CREATE_DOCTOR,
        payload: data.message,
      });
    } else {
      dispatch({
        type: CREATE_DOCTOR,
        payload: data,
      });
    }
  });
};

export const updateDoctor = (doctor, id) => (dispatch) => {
  Applet.updateDoctor(doctor, id, (data) => {
    if (data.message) {
      dispatch({
        type: UPDATE_DOCTOR,
        payload: data.message,
      });
    } else {
      dispatch({
        type: UPDATE_DOCTOR,
        payload: data,
      });
    }
  });
};

export const deleteDoctor = (id) => (dispatch) => {
  Applet.deleteDoctor(id, (data) => {
    if (data.message) {
      dispatch({
        type: DELETE_DOCTOR,
        payload: data.message,
      });
    } else {
      dispatch({
        type: DELETE_DOCTOR,
        payload: data,
      });
    }
  });
};

// Reducer:
const initialState = {
  doctors: [],
  doctor: {},
  message: '',
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    case FETCH_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };
    case CREATE_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };
    case UPDATE_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };
    case DELETE_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };
    default:
      return state;
  }
};

export default doctorReducer;
