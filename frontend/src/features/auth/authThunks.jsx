import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, updateUser } from "./authAPI";
import { saveToken } from "@/utils/tokenStorage";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    console.log("Login action started:", { username });
    try {
      const response = await loginAPI(username, password);
      console.log("Login API response:", response);

      // Transform the response to match the expected format
      const transformedResponse = {
        user: response.user,
        token: response.token,
      };

      saveToken(transformedResponse.token);
      return transformedResponse;
    } catch (err) {
      console.error("Login error:", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "auth/updateUser",
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const response = await updateUser(firstName, lastName);
      console.log("Update user response:", response);
      return response;
    } catch (err) {
      console.error("Update user error:", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
