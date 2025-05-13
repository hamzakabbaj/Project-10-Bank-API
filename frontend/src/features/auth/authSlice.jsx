import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const initialState = {
  user: null,
  token: null,
  status: "idle", // 'loading' | 'succeeded' | 'failed'
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        console.log("Auth state - pending");
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("Auth state - fulfilled:", action.payload);
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("Auth state - rejected:", action.payload);
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
