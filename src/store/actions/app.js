import { CHANGE_MODE, GET_WATCHES } from "./types";

const url = process.env.REACT_APP_DB_URL;

export const changeMode = payload => {
  document.querySelector("html").setAttribute("data-theme", payload);
  localStorage.setItem("appMode", payload);
  return { type: CHANGE_MODE, payload };
};

export const getWatches = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/watches.json`);
      const result = await response.json();
      const payload = Object.keys(result).map(key => {
        return {
          ...result[key],
          id: key
        };
      });
      dispatch({ type: GET_WATCHES, payload });
    } catch (error) {
      throw new Error(error);
    }
  };
};
