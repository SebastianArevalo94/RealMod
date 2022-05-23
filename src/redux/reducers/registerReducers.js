import { typesRegister } from "../types/types";

export const registerReducers = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.register:
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password
      };

    default:
      return state;
  }
};
