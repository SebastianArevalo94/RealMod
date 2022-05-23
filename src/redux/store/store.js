import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { registerReducers } from "../reducers/registerReducers";
import { loginReducers } from "../reducers/loginReducers";
import { propertiesReducers } from "../reducers/propertiesReducers";
import { carritoReducers } from "../reducers/carritoReducers";
import { favoritosReducers } from "../reducers/favoritosReducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducersEnviar = combineReducers({
  register: registerReducers,
  login: loginReducers,
  properties: propertiesReducers,
  carrito: carritoReducers,
  favoritos: favoritosReducers
});

export const store = createStore(
  reducersEnviar,
  composeEnhancers(applyMiddleware(thunk))
);
