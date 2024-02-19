import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  signupRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
} from 'api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signupRequest(body);
      toast.success('Registration success');
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Incorrect Authentication Data');
      } else {
        toast.error('500 Internal Server Error');
      }

      return rejectWithValue(error.response.status);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      toast.success('Welcom to your phonebook');
      return data;
    } catch (error) {
      toast.error('Incorrect email adress or password');
      return rejectWithValue(error.response.status);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      toast.info('You are logout. Bye');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
