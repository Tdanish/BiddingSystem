import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import itemSlice from "./itemSlice";

const store = configureStore({
  reducer: { auth: authSlice, itemslice: itemSlice },
});

export default store;
