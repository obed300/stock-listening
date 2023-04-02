import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './features/Home/homeSlice';

const store = configureStore({
  reducer: {
    data: homeSlice,

  },
});

export default store;
