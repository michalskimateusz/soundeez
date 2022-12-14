import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice.js";
import { shazamCoreApi } from "./services/shazamCore.js";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
