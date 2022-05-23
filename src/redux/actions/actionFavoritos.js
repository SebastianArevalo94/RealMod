import { typesFavoritos } from "../types/types";

export const addToFavs = (item) => {
  return {
    type: typesFavoritos.addFavoritos,
    item: item,
  };
}

export const removeFromFavs = (item) => {
  return {
    type: typesFavoritos.deleteFavoritos,
    item: item,
  };
}