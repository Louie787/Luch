import CHANGE_MODE from "./types";

const changeMode = payload => {
  document.querySelector("html").setAttribute("data-theme", payload);
  localStorage.setItem("appMode", payload);
  return { type: CHANGE_MODE, payload };
};

export default changeMode;
