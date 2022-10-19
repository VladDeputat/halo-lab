import React from "react";
import styles from "./Hero.module.scss";
import headline from "../../assets/hero/headline.png";
import parrot from "../../assets/hero/parrot.png";
import membersCount from "../../assets/hero/members-count.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div>
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
          <img className={styles.parrotImg} src={parrot} alt="parrot" />
          <div className={styles.membersCountContainer}>
            <img
              className={styles.membersCountImg}
              src={membersCount}
              alt="members-count"
            />
            <div className={styles.membersCount}>
              <p>Members</p>
              <p>232</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
