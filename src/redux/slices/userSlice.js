import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload['username'];
    },
    logout: () => initialState,
  }
})

export const { login, logout } = userSlice.actions;
