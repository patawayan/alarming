import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    darkMode: true
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    }
  }
});

// this is for dispatch
export const { setDarkMode, toggleDarkMode } = settingsSlice.actions;

// this is for configureStore
export const settingsReducer = settingsSlice.reducer;
