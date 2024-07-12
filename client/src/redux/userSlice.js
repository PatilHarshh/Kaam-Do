import { createSlice } from "@reduxjs/toolkit";
import { users } from "../utils/data";

const initialState = {
  user: JSON.parse(window?.localStorage.getItem("userInfo")) ?? users[1],
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("userInfo");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export const Login = (user) => (dispatch) => {
  dispatch(login(user));
};

export const Logout = () => (dispatch) => {
  dispatch(logout());
};