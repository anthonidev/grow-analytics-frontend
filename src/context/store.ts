import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slice/configSlice";
import userReducer from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    config: configReducer,
    user: userReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
