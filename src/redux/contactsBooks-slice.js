import { createSlice } from '@reduxjs/toolkit';
import InitialState from './InitialState';
import { loadingReducer, errorReducer } from '../shared/functions/redux';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const contactsBooksSlice = createSlice({
  name: 'contacts',
  initialState: InitialState.contacts,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, loadingReducer)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, errorReducer)

      .addCase(addContact.pending, loadingReducer)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, errorReducer)

      .addCase(deleteContact.pending, loadingReducer)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, errorReducer);
  },
});

export default contactsBooksSlice.reducer;
