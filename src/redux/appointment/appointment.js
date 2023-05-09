const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

export const createNewAppointment = async (userid, datareserve) => {
  const {
    disease, city, appointmentDate, appointmentTime, doctorID,
  } = datareserve;
  const UserId = `${userid}`;
  const reservation = {
    disease,
    city,
    appointmentDate,
    appointmentTime,
    user: UserId,
    doctor: doctorID,
  };
  const resp = await fetch(`http://127.0.0.1:3000/users/${userid}/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      reservation,
    }),
  });
  const data = await resp.text();
  return data;
};

export const createAppointment = (userid, data) => async (dispatch) => {
  const appiontment = await createNewAppointment(userid, data);
  dispatch({
    type: CREATE_APPOINTMENT,
    payload: appiontment,
  });
};
