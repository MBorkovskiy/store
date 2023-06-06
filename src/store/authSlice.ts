import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  logIn: boolean;
  logOut: boolean;
}

const initialState: InitialStateProps = {
  logIn: false,
  logOut: false,
};

const authSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    isLogIn: (state, action) => {
      state.logIn = action.payload;
    },
    isLogOut: (state, action) => {
      state.logOut = action.payload;
    },
  },
});

export const { isLogIn, isLogOut } = authSlice.actions;
export default authSlice.reducer;
