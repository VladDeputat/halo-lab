import React, {useState} from "react";
import styles from "./Header.module.scss";
import logoRootz from "../../assets/logo/rootz.svg";
import leaf1 from "../../assets/logo/leaf1.svg";
import leaf2 from "../../assets/logo/leaf2.svg";
import leaf3 from "../../assets/logo/leaf3.svg";
import BurgerBtn from "./burgerBtn/BurgerBtn";
import MobileMenu from "./mobileMenu/MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="index.html">
            <span>
              <img className={styles.logoLeaf} src={leaf1} alt="leaf1" />
              <img className={styles.logoLeaf} src={leaf2} alt="leaf2" />
              <img className={styles.logoLeaf} src={leaf3} alt="leaf3" />
            </span>

            <img className={styles.logo} src={logoRootz} alt="logo" />
          </a>
        </div>

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
