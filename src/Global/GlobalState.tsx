import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
};

const globalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    SignIn: (state: any, { payload }: any) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { SignIn, logOut } = globalState.actions;

export default globalState.reducer;
