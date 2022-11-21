import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import authReducer from "../features/auth/authSlice";
import propertyReducer from "../features/properties/propertySlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    property: propertyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
