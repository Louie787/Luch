import CHANGE_MODE from "../actions/types";

const initialState = {
  appMode: "light"
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_MODE:
      return {
        ...state,
        appMode: payload
      };
    default:
      return state;
  }
};

export default appReducer;
