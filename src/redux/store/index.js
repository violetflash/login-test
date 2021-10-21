import { configureStore } from "@reduxjs/toolkit";
import { loginFormSlice } from '../slices/loginFormSlice';

export const store = configureStore({
  reducer: {
    loginForm: loginFormSlice.reducer,
  }
})
