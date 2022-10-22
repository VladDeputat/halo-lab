import React, {useEffect, useState} from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className={visible ? "" : `${styles.hide}`}>
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
