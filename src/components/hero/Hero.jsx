import React, {useState} from "react";
import styles from "./Hero.module.scss";
import headline from "../../assets/hero/headline.png";
import headIcon from "../../assets/icons/headIcon.svg";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(29181);

  const onClick = () => {
    if (query === "") {
      return;
    } else {
      window.open(`https://www.google.com.ua/maps/place/${query}`, "_blank").focus();
      setCount(count + 1);
      setQuery("");
    }
  };
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.headlineContainer}>
          <img className={styles.headlineImg} src={headline} alt="headline" />
          <div className={styles.inputContainer}>
            <p>
              The scale of the challenges facing our planet can seem daunting, but we can
              all do something.
            </p>
            <label>
              <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                type="text"
                placeholder="Find the place to help"
              />
            </label>
            <button onClick={onClick} className={styles.searchBtn} type="submit">
              Search
            </button>
          </div>
        </div>
        <div className={styles.membersCountContainer}>
          <div className={styles.membersCount}>
            <img src={headIcon} alt="headIcon" />
            <div>
              <p>Members</p>
              <p>{count}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
