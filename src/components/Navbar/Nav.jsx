import React from "react";
import styles from "./Nav.module.scss";
import NavList from "./NavList/NavList";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <img src="/logo.jpg" alt="avataar_assignment_logo" />
        <span>E-COMM</span>
      </div>
      <NavList />
      <div className={styles.nav__search}>
        <img
          className={styles.nav__search_icon}
          src="/search.png"
          alt="search"
        />
        <input type="text" placeholder="Search something" />
      </div>
    </div>
  );
};

export default Nav;
