import axios from 'axios';
import { toast } from 'react-toastify';
import baseUrl from '../base_url';

export const createAccount = async (reqBody) => {
  try {
    const response = await axios.post(`${baseUrl}users`, { user: reqBody });
    toast.success('Signed Up Successfully');
    return response.data;
  } catch (error) {
    const errorMessage = error.message;
    toast.error('Oops, check password confirmation');
    throw new Error(errorMessage);
  }
};

export const getToken = async (reqBody) => {
  try {
    const response = await axios.post(`${baseUrl}users/sign_in`, {
      user: reqBody,
    });
    toast.success('Signed in successfully');
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error('Invalid Email or Password');
    }
    throw new Error(error);
  }
};
