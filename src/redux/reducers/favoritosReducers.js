import { typesFavoritos } from "../types/types";

const initialState = {
  favoritos: [],
};

export const favoritosReducers = (state = initialState.favoritos, action) => {
  switch (action.type) {
    case typesFavoritos.addFavoritos:
      return [...state, action.item];
    case typesFavoritos.deleteFavoritos:
      return state.filter((i) => i.id !== action.item.id);
    default:
      return state;
  }
};
