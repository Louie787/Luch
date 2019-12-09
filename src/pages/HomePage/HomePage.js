import React from "react";
import "./HomePage.scss";
import { CSSTransition } from "react-transition-group";
import Header from "../../components/Header/Header";
import HeaderSlider from "../../components/Header/HeaderSlider/HeaderSlider";

const HomePage = () => {
  return (
    <>
      <Header
        headerBg={"var(--header-bg-color)"}
        sidebarBg={"var(--sidebar-color)"}
        hasLine={true}
        leftText={
          <>
            MINSK <span>Watch Factory</span>
          </>
        }
        mainContent={<HeaderSlider />}
      />
      <section className="suggestions"></section>
    </>
  );
};
export default HomePage;
