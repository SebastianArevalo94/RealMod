import { typesProperties } from "../types/types";

const initialState = {
  properties: [],
};

export const propertiesReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesProperties.add:
      return {
        properties: [action.payload],
      };

    case typesProperties.list:
      return {
        properties: [...action.payload],
      };

    case typesProperties.edit:
      return {
        ...state,
      };

    case typesProperties.delete:
      return {
        properties: state.properties.filter((propertie) => propertie.id !== action.payload),
      };

    default:
      return state;
  }
};
