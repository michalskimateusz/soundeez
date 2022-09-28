import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice.js";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
