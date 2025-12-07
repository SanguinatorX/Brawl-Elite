import { configureStore, createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: 'bla',
  reducers: {},
});

export const store = configureStore({
  reducer: {
    state1: stateSlice.reducer,
  },
});
