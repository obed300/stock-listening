import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=0a76de74c2feb2416493cebdf0688811';

const initialState = {
  loading: false,
  companies: [],
  filteredCompanies: [], // initially set to an empty array
  error: '',
};

export const fetchData = createAsyncThunk('data/fetchData', () => axios.get(URL).then((response) => response.data));

const homeSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    searchByNameOrSymbol: (state, action) => {
      state.filteredCompanies = state.companies.filter(
        (company) => company.name.toLowerCase().includes(action.payload.toLowerCase())
          || company.symbol.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return state;
    },
    reset: (state) => ({
      ...state,
      filteredCompanies: state.companies,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.companies = action.payload;
      state.filteredCompanies = action.payload; // set to the initial data fetched
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.companies = [];
      state.filteredCompanies = []; // set to an empty array if there's an error
      state.error = action.error.message;
    });
  },
});

export const { searchByNameOrSymbol, reset } = homeSlice.actions;
export default homeSlice.reducer;
