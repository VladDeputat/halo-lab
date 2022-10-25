import React from "react";
import styles from "./Footer.module.scss";
import twIcon from "../../assets/icons/twitter.svg";
import fbIcon from "../../assets/icons/facebook.svg";
import liIcon from "../../assets/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <h3 className={styles.heading}>Contacts</h3>
        <p>2022 Rootz Foundation. All rights reserved</p>
      </div>

      <div>
        <h6 className={styles.subHeading}>Headquarters</h6>
        <p>1234 Taliban</p>
        <p>Los Angeles, La 1234567</p>
        <p>(123) 456-7890</p>
      </div>
      <div>
        <h6 className={styles.subHeading}> Social media</h6>
        <div className={styles.iconBox}>
          <a href="https://twitter.com/" target="blank">
            <img src={twIcon} alt="twitter" />
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <img src={fbIcon} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/" target="blank">
            <img src={liIcon} alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
