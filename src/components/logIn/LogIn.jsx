import React from "react";
import styles from "./Login.module.scss";

const LogIn = () => {
  return (
    <section>
      <div className={styles.sectionContainer}>
        <div>
          <h3 className={styles.getStartedHeading}>Get started today!</h3>
          <p className={styles.getStartedText}>
            Learn more about how you can save our planet's nature. From smart consumption
            to switching to renewable energy, each of us can do our part to save the
            planet.
          </p>
        </div>
        <div className={styles.loginContainer}>
          <h4 className={styles.formHeading}>Log in</h4>

          <form className={styles}>
            <input
              className={styles}
              autoComplete="off"
              name="name"
              type="text"
              placeholder="Name"
            />
            <input
              className={styles}
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email"
            />
            <button className={styles} type="submit">
              book a demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
