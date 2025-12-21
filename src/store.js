import { configureStore, createSlice } from '@reduxjs/toolkit';

const buggeurSlice = createSlice({
  name: 'buggeurSlice',
  initialState: true,
  reducers: {
    bug: (prevSate, action) => {
      return false;
    },
    anbug: (prevSate, action) => {
      return true;
    }
  },
});

const casseurSlice = createSlice({
  name: 'casseurSlice',
  initialState: true,
  reducers: {
    cass: (prevSate, action) => {
      return false;
    },
    ancass: (prevSate, action) => {
      return true;
    }
  },
});

export const { bug, anbug } = buggeurSlice.actions;
export const { cass, ancass } = casseurSlice.actions;

export const store = configureStore({
  reducer: {
    bugge: buggeurSlice.reducer,
    casse: casseurSlice.reducer,
  },
});
