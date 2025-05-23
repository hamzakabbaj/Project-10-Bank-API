import { createSlice } from "@reduxjs/toolkit";
import { loginUser, updateUserThunk } from "./authThunks";
import { clearToken } from "@/utils/tokenStorage";

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
      clearToken();
    },
    updateUser: (state, action) => {
      state.user = action.payload;
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
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = {
          ...state.user,
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
        };
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
