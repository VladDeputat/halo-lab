import React from "react";
import styles from "./MobileMenu.module.scss";

const mobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={menuOpen ? `${styles.menu} + ${styles.menuOpen}` : `${styles.menu}`}>
      <nav className={styles.mobMenuNav}>
        <ul>
          <li className={styles}>Home</li>
          <li className={styles}>Our mission</li>
          <li className={styles}>Places</li>
          <li className={styles}>Team</li>
        </ul>
      </nav>
      <button type="button" className={styles.applyBtn}>
        Apply
      </button>
    </div>
  );
};

export default mobileMenu;
