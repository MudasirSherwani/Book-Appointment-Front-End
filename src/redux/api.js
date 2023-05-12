import axios from 'axios';
import baseUrl from './base_url';

const Applet = {
  fetchDoctors: (success) => {
    axios
      .get(`${baseUrl}/doctors`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },

  fetchDoctor: (id, success) => {
    axios
      .get(`${baseUrl}/doctors/${id}`)
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },

  createDoctor: (doctor, userId, success) => {
    axios({
      method: 'post',
      url: `${baseUrl}/doctors?user_id=${userId}`,
      data: doctor,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },

  updateDoctor: (doctor, id, success) => {
    axios({
      method: 'put',
      url: `${baseUrl}/doctors/${id}`,
      data: doctor,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },

  deleteDoctor: (id, success) => {
    axios({
      method: 'delete',
      url: `${baseUrl}/doctors/${id}`,
    })
      .then((response) => {
        success(response);
      })
      .catch((error) => {
        success(error.message);
      });
  },
};

export default Applet;
