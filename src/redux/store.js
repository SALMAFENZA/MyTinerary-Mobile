import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./reducers/citiesAPI";
import itinerariesAPI from "./reducers/itinerariesaAPI";
import userReducer from "./reducers/userSlice";
import { usersAPI } from "./reducers/usersAPI";

export const store = configureStore({
  reducer: {
    [citiesAPI.reducerPath]: citiesAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    user: userReducer,
    [itinerariesAPI.reducerPath]: itinerariesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      inmutableCheck: false,
      serializableCheck: false,
    }).concat(
      citiesAPI.middleware,
      itinerariesAPI.middleware,
      usersAPI.middleware
    ),
});
