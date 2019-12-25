import { CHANGE_MODE, GET_WATCHES } from "../actions/types";

const initialState = {
  appMode: "light",
  watches: []
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_MODE:
      return {
        ...state,
        appMode: payload
      };
    case GET_WATCHES:
      return {
        ...state,
        watches: payload
      };
    default:
      return state;
  }
};

export default appReducer;
