import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = ({menuOpen, setMenuOpen}) => {
  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className={
        menuOpen ? `${styles.burgerBtn} + ${styles.open}` : `${styles.burgerBtn}`
      }
      type="button"
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default BurgerBtn;
