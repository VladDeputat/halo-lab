import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header>
      <a href="index.html">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>

      <nav>
        <ul>
          <li className={styles.navLink}>Home</li>
          <li className={styles.navLink}>Our mission</li>
          <li className={styles.navLink}>Places</li>
          <li className={styles.navLink}>Team</li>
        </ul>
      </nav>
      <button type="button" className={styles.applyBtn}>
        Apply
      </button>
    </header>
  );
};

export default Header;
