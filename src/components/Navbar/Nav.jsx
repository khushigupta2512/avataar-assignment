import React from "react";
import styles from "./Nav.module.scss";
import NavList from "./NavList/NavList";
import { useViewport } from "../../context/ResizeContext";
import Ham from "./HamburgerMenu/Ham";

const Nav = () => {
  const { width } = useViewport();
  const compact = 770;

  if (width < compact) {
    return (
      <div className={styles.nav}>
        <div className={styles.nav__logo}>
          <img
            src={process.env.PUBLIC_URL + "/logo.jpg"}
            alt="avataar_assignment_logo"
          />
          <span>E-COMM</span>
        </div>
        <Ham />
      </div>
    );
  }
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <img
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="avataar_assignment_logo"
        />
        <span>E-COMM</span>
      </div>
      <NavList />
      <div className={styles.nav__search}>
        <img
          className={styles.nav__search_icon}
          src={process.env.PUBLIC_URL + "/search.png"}
          alt="search"
        />
        <input type="text" placeholder="Search something" />
      </div>
    </div>
  );
};

export default Nav;
