import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // recommended if using non-serializable like Date/File
    }),
  devTools: true, // Explicitly enable Redux DevTools
});

export default store;
