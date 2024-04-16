import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) =>
  state.auth.user ? !!state.auth.user.token : false;

export default authSlice;
