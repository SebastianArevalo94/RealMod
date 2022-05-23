import { typesCarrito } from "../types/types";

const initialState = {
  carrito:[]
}

export const carritoReducers = (state = initialState.carrito, action) => {
  switch (action.type) {
    case typesCarrito.addCarrito:
      return [...state, action.item];
    case typesCarrito.deleteCarrito:
      return state.filter((i) => i.id !== action.item.id);
    case typesCarrito.deleteAll:
      return []
    default:
      return state;
  }
}
