import { createSlice } from '@reduxjs/toolkit';
import { signup, login, current, logout } from './auth-operations';
import { loadingReducer, errorReducer } from '../../shared/functions/redux';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signup.pending, loadingReducer)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, errorReducer)
      .addCase(login.pending, loadingReducer)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, errorReducer)
      .addCase(current.pending, loadingReducer)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, state => {
        state.token = '';
        state.isLoading = false;
      })
      .addCase(logout.pending, loadingReducer)
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.isLogin = false;
        state.isLoading = false;
        state.token = '';
      })
      .addCase(logout.rejected, errorReducer);
  },
});

export default authSlice.reducer;
