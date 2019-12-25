import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { changeMode, getWatches } from "./store/actions/app";
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LogoLoader from "./components/LogoLoader/LogoLoader";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const appMode =
      localStorage.getItem("appMode") === null
        ? "light"
        : localStorage.getItem("appMode");

    dispatch(changeMode(appMode));
    dispatch(getWatches());
  }, []);

  return (
    <>
      <LogoLoader />
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/blog/:id" component={BlogPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
