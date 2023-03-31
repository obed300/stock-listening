import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer, { fetchData, searchByNameOrSymbol, reset } from '../redux/features/Home/homeSlice';

jest.mock('axios');

describe('homeSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        data: homeReducer,
      },
    });
  });

  describe('searchByNameOrSymbol', () => {
    it('should update filteredCompanies based on search query', () => {
      const mockState = {
        companies: [
          { name: 'Apple Inc.', symbol: 'AAPL' },
          { name: 'Microsoft Corporation', symbol: 'MSFT' },
          { name: 'Amazon.com Inc.', symbol: 'AMZN' },
        ],
        filteredCompanies: [
          { name: 'Apple Inc.', symbol: 'AAPL' },
          { name: 'Microsoft Corporation', symbol: 'MSFT' },
          { name: 'Amazon.com Inc.', symbol: 'AMZN' },
        ],
      };
      const action = searchByNameOrSymbol('aapl');
      const newState = homeReducer(mockState, action);
      expect(newState.filteredCompanies).toEqual([{ name: 'Apple Inc.', symbol: 'AAPL' }]);
    });
  });

  describe('reset', () => {
    it('should reset filteredCompanies to companies', () => {
      const mockState = {
        companies: [
          { name: 'Apple Inc.', symbol: 'AAPL' },
          { name: 'Microsoft Corporation', symbol: 'MSFT' },
          { name: 'Amazon.com Inc.', symbol: 'AMZN' },
        ],
        filteredCompanies: [{ name: 'Apple Inc.', symbol: 'AAPL' }],
      };
      const action = reset();
      const newState = homeReducer(mockState, action);
      expect(newState.filteredCompanies).toEqual(mockState.companies);
    });
  });

  describe('fetchData', () => {
    it('should fetch data successfully', async () => {
      const mockData = [
        { name: 'Apple Inc.', symbol: 'AAPL' },
        { name: 'Microsoft Corporation', symbol: 'MSFT' },
        { name: 'Amazon.com Inc.', symbol: 'AMZN' },
      ];
      axios.get.mockResolvedValueOnce({ data: mockData });
      await store.dispatch(fetchData());
      const state = store.getState().data;
      expect(state.loading).toBe(false);
      expect(state.error).toBe('');
      expect(state.companies).toEqual(mockData);
      expect(state.filteredCompanies).toEqual(mockData);
    });

    it('should handle errors when fetching data', async () => {
      axios.get.mockRejectedValueOnce(new Error('Network Error'));
      await store.dispatch(fetchData());
      const state = store.getState().data;
      expect(state.loading).toBe(false);
      expect(state.error).toBe('Network Error');
      expect(state.companies).toEqual([]);
      expect(state.filteredCompanies).toEqual([]);
    });
  });
});
