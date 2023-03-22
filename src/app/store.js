import { configureStore } from "@reduxjs/toolkit";
import aReducer from "../features/a/aSlice";
import bReducer from "../features/b/bSlice";

export const store = configureStore({
  reducer: {
    a: aReducer,
    b: bReducer,
  },
});
