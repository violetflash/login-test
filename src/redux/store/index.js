import { configureStore } from "@reduxjs/toolkit";
import { loginFormSlice } from '../slices/loginFormSlice';
import { userSlice } from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    loginForm: loginFormSlice.reducer,
    user: userSlice.reducer
  }
});