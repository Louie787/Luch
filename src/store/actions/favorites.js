import { GET_FAVORITES, ADD_TO_FAVORITES, DEL_FROM_FAVORITES } from "./types";

export const getFavorites = () => {
  const payload = JSON.parse(localStorage.getItem("favorites"));
  return { type: GET_FAVORITES, payload };
};

export const addToFavorites = payload => {
  return { type: ADD_TO_FAVORITES, payload };
};

export const delFromFavorites = payload => {
  return { type: DEL_FROM_FAVORITES, payload };
};
