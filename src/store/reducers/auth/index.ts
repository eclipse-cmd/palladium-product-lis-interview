import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { reducers } from "./reducers";

export type User = {
  fullname: string;
  email: string;
  username: string;
  phone_number: string;
  date_joined: string;
  last_login: string;
};

export type AuthState = {
  user: User | null;
  auth: boolean;
  token: string | null;
};

const InitialAuthState = {
  user: null,
  auth: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth-slice",
  initialState: InitialAuthState,
  reducers,
});

export const { setLogin } = authSlice.actions;

export const selectAuth = ({ auth }: RootState) => auth;

export default authSlice.reducer;
