import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Reducer/favoriteSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (character) => {
    dispatch(removeFromFavorites(character));
  };

  return (
    <div>
      <h2>Favori Karakterler</h2>
      <ul>
        {favorites.map((character) => (
          <li key={character.id}>
            {character.name}
            <button onClick={() => handleRemoveFromFavorites(character)} className="btn btn-primary px-3 py-1 shadow m-3">
              Favorilerden kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
