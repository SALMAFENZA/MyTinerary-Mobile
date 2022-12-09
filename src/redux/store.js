import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./reducers/citiesAPI";

export const store = configureStore({
  reducer: {
    [citiesAPI.reducerPath]: citiesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      inmutableCheck: false,
      serializableCheck: false,
    }).concat(citiesAPI.middleware),
});
