import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer, // register
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
