import React, {useState} from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Logo.png";
import BurgerBtn from "./burgerBtn/BurgerBtn";
import MobileMenu from "./mobileMenu/MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className={styles.headerContainer}>
        <a href="index.html">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>

        <nav className={styles.headerNav}>
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

        <BurgerBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
