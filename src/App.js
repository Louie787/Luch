import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import changeMode from "./store/actions/app";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const appMode =
      localStorage.getItem("appMode") === null
        ? "light"
        : localStorage.getItem("appMode");
    dispatch(changeMode(appMode));
  }, []);

  return <HomePage />;
};

export default App;
