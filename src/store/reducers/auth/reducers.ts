import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./index";

export const reducers = {
  setLogin: (state: AuthState, { payload }: PayloadAction<{ user: User; token: string }>) => {
    state.auth = true;
    state.user = payload.user;
    state.token = payload.token;
  },
};
