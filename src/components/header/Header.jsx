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
            <li className={styles.navLink}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.navLink}>
              <a href="#mission">Our mission</a>
            </li>
            <li className={styles.navLink}>
              <a href="#places">Places</a>
            </li>
            <li className={styles.navLink}>
              <a href="#team">Team</a>{" "}
            </li>
          </ul>
        </nav>
        <a className={styles.applyBtn} href="#apply">
          Apply
        </a>

        <BurgerBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
