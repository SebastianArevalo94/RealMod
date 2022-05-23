import { typesCarrito } from "../types/types";

export const addToCart = (item) => {
  return {
    type: typesCarrito.addCarrito,
    item: item,
  };
}

export const removeFromCart = (item) => {
  return {
    type: typesCarrito.deleteCarrito,
    item: item,
  };
}

export const removeAll = () => {
  return {
    type: typesCarrito.deleteAll,
    item: [],
  };
}
