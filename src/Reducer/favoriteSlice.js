import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  maxFavorites: 10,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
        if (state.favorites.length < state.maxFavorites) {
            const characterToAdd = action.payload;
            const existingCharacter = state.favorites.find(
              (char) => char.id === characterToAdd.id
            );
    
            if (!existingCharacter) {
              state.favorites.push(characterToAdd);
            }
          }
        },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (character) => character.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;