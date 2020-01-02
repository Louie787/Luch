import React, { useRef, useEffect, useState } from "react";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { changeMode } from "../../store/actions/app";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";
import Search from "../Search/Search";

const Header = props => {
  const dispatch = useDispatch();
  const appMode = useSelector(state => state.appReducer.appMode);

  let leftText = useRef();

  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const [sidebarComponentName, setSidebarComponentName] = useState(null);

  const duration = 400;

  useEffect(() => {
    leftText.current.style.marginTop = leftText.current.scrollWidth + "px";
  }, []);

  const showSidebar = str => {
    if (sidebarComponentName === str && sidebarIsVisible === true) {
      setSidebarIsVisible(false);
    } else if (sidebarComponentName !== str && sidebarIsVisible === true) {
      setSidebarIsVisible(false);
      setTimeout(() => {
        setSidebarComponentName(str);
        setSidebarIsVisible(true);
      }, duration);
    } else {
      setSidebarComponentName(str);
      setSidebarIsVisible(true);
    }
  };

  const returnComponent = () => {
    switch (sidebarComponentName) {
      case "Menu":
        return <Menu />;
      case "Cart":
        return <Cart />;
      case "Favorites":
        return <Favorites />;
      case "Search":
        return <Search />;
      default:
        return null;
    }
  };

  return (
    <header className="header" style={{ background: props.headerBg }}>
      <div className="header__left">
        <Logo />
        {props.hasLine && <span className="header__left-line"></span>}
        <span className="header__left-text" ref={leftText}>
          {props.leftText}
        </span>
      </div>

      <CSSTransition
        in={sidebarIsVisible}
        classNames="header__main_blur"
        timeout={duration}
      >
        <div className="header__main">
          <div
            className="header__main-wrapper"
            onClick={() => setSidebarIsVisible(false)}
          ></div>
          {props.mainContent}
        </div>
      </CSSTransition>

      <div className="sidebar" style={{ background: props.sidebarBg }}>
        <div className="sidebar__icons-wrapper">
          <div
            className={
              sidebarComponentName === "Menu" && sidebarIsVisible
                ? "hamburger hamburger_active"
                : "hamburger"
            }
            title={
              sidebarComponentName === "Menu" && sidebarIsVisible
                ? "Hide menu"
                : "Show menu"
            }
            onClick={() => showSidebar("Menu")}
          >
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </div>
          <div
            className="sidebar__icon"
            title={
              sidebarComponentName === "Cart" && sidebarIsVisible
                ? "Hide cart"
                : "Show cart"
            }
            onClick={() => showSidebar("Cart")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8rem"
              height="1.8rem"
              viewBox="0 0 600 600"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="25px"
            >
              <polygon points="144.6 178.17 60.95 536.23 549.05 536.23 472.29 178.17 144.6 178.17" />
              <path d="M206.88,234.65V145.32c13.95-47.09,145.93-93.73,203.87,0v89.33" />
              <circle cx="208.29" cy="226.97" r="15" />
              <circle cx="410.75" cy="226.97" r="15" />
            </svg>
            <span className="cart-count">17</span>
          </div>
          <div
            className="sidebar__icon"
            title={
              sidebarComponentName === "Favorites" && sidebarIsVisible
                ? "Hide favorites"
                : "Show favorites"
            }
            onClick={() => showSidebar("Favorites")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8rem"
              height="1.8rem"
              viewBox="0 0 100 100"
              fill="none"
              stroke="var(--primary-color)"
              strokeWidth="4px"
            >
              <path d="M 16 8 L 16 72 L 48 56 L 80 72 L 80 8 Z M 16 8 " />
            </svg>
          </div>
          <div
            className="sidebar__icon"
            title={
              sidebarComponentName === "Search" && sidebarIsVisible
                ? "Hide search"
                : "Show search"
            }
            onClick={() => showSidebar("Search")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3rem"
              height="1.3rem"
              viewBox="0 0 451 451"
              fill="var(--primary-color)"
              className="search-icon"
            >
              <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3   s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4   C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3   s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z" />
            </svg>
          </div>
        </div>
        <div className="sidebar__icons-wrapper">
          <div
            className="sidebar__icon"
            title={appMode === "light" ? "Set dark mode" : "Set light mode"}
            onClick={() =>
              dispatch(changeMode(appMode === "light" ? "dark" : "light"))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3rem"
              height="1.5rem"
              viewBox="-12 0 448 448.04455"
              fill={appMode === "light" ? "none" : "var(--primary-color)"}
              stroke="var(--primary-color)"
              strokeWidth="25px"
            >
              <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0" />
            </svg>
          </div>
          <label className="change-currency">
            <input type="checkbox" className="change-currency__input" />
            <span className="change-currency__check"></span>
            <span className="change-currency__rub">&#8381;</span>
            <span className="change-currency__usd">&#36;</span>
          </label>
        </div>
      </div>
      <CSSTransition
        in={sidebarIsVisible}
        classNames="sidebar__wrapper_show"
        timeout={duration}
        mountOnEnter
        unmountOnExit
      >
        <div className="sidebar__wrapper">{returnComponent()}</div>
      </CSSTransition>
    </header>
  );
};

Header.propTypes = {
  headerBg: PropTypes.string,
  sidebarBg: PropTypes.string,
  hasLine: PropTypes.bool,
  leftText: PropTypes.node,
  mainContent: PropTypes.node
};

export default Header;
