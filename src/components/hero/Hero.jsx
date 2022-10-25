import React from "react";
import styles from "./Hero.module.scss";
import headline from "../../assets/hero/headline.png";
import headIcon from "../../assets/icons/headIcon.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.headlineContainer}>
          <img className={styles.headlineImg} src={headline} alt="headline" />
          <div className={styles.inputContainer}>
            <p>
              The scale of the challenges facing our planet can seem daunting, but we can
              all do something.
            </p>
            <label>
              <input type="text" placeholder="Find the place to help" />
            </label>
            <button className={styles.searchBtn} type="submit">
              Search
            </button>
          </div>
        </div>
        <div className={styles.membersCountContainer}>
          <div className={styles.membersCount}>
            <img src={headIcon} alt="headIcon" />
            <div>
              <p>Members</p>
              <p>29 181</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
