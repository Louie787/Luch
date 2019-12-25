import React, { useState, useEffect } from "react";
import "./LogoLodaer.scss";
import { CSSTransition } from "react-transition-group";

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
          ".logo-loader > svg"
        ).style.transform = `translate(1.875rem, ${
          window.scrollY === 0 ? "2rem" : "-100%"
        })`;
      }}
    >
      <div className="logo-loader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 224.39999 127.5"
          fill={"var(--primary-color)"}
        >
          <path
            transform="translate(-12,-10.8)"
            d="m236.4 52.1-49.6 41.4-5.7-4.3 13.4-29.7-6.2-.2-3.9-10.8-73.2 89.8-6.2-3.9 32.5-67.2-28 26.4-5.9-4.3 11.5-23.6-31.5 28.1-5.8-4.2 28-61.5-88.9 74.9-4.9-5.8 102.5-86.4 5.7 4.3-27.6 60.4 32.3-28.8 5.7 4.3-10.8 22.4 28.1-26.4 5.8 4.3-27.2 56.2 60.5-74.3 6.7 18.6 12.5.3-11 24.4 36.3-30.3z"
          />
        </svg>
      </div>
    </CSSTransition>
  );
};

export default LogoLoader;
