import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: "",
  password: ""
}

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setInput(state, action) {
      state[action.payload['name']] = action.payload.inputValue;
    },
    clearInput(state, action) {
      state[action.payload] = "";
    }
  }
})

export const { setInput, clearInput } = loginFormSlice.actions;
