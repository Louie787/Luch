import React, { useState, useEffect } from "react";
import "./LogoLodaer.scss";
import { CSSTransition } from "react-transition-group";
import Logo from "./../Logo/Logo";

const LogoLoader = () => {
  const [logoIsLoading, setLogoIsLoading] = useState(false);

  useEffect(() => {
    setLogoIsLoading(true);
  }, []);

  return (
    <CSSTransition
      in={logoIsLoading}
      classNames="logo-loader"
      timeout={3400}
      onEntering={() => {
        document.querySelector(
          ".logo-loader .logo"
        ).style.transform = `translate(1.875rem, ${
          window.scrollY === 0 ? "1.875rem" : "-100%"
        })`;
      }}
    >
      <div className="logo-loader">
        <Logo />
      </div>
    </CSSTransition>
  );
};

export default LogoLoader;
