import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts')
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, { rejectWithValue, dispatch  }) => {
      try {
        await axios.post('/contacts', { name, number })
        dispatch(fetchContacts())
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue, dispatch }) => {
      console.log(id);
      try {
      await axios.delete(`/contacts/${id}`)
      dispatch(fetchContacts())
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
    )