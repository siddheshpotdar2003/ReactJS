import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    //todo: add more reducers for posts
  },
});

export default store;
