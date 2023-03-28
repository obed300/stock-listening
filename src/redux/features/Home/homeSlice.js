import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=7a25911bf2ac8ccc1b6a45f6d0d6ced2';

const initialState = {
  loading: false,
  companies: [],
  error: '',
};

export const fetchData = createAsyncThunk('data/fetchData', () => axios
  .get(URL)
  .then((response) => response.data));

const homeSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      const states = state;
      states.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const states = state;
      states.loading = false;
      states.companies = action.payload;
      states.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      const states = state;
      states.loading = false;
      states.companies = [];
      states.error = action.error.message;
    });
  },
});
export default homeSlice.reducer;
