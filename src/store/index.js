import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../Reducer/favoriteSlice";

const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

export default store;
