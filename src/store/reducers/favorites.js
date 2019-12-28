import {
  GET_FAVORITES,
  ADD_TO_FAVORITES,
  DEL_FROM_FAVORITES
} from "./../actions/types";

const favoritesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_FAVORITES:
      return payload === null ? state : payload;
    case ADD_TO_FAVORITES:
      return [...state, payload];
    case DEL_FROM_FAVORITES:
      return state.filter(id => id !== payload);
    default:
      return state;
  }
};

export default favoritesReducer;
