import React, {useState} from "react";
import styles from "./Login.module.scss";

const LogIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      return;
    } else {
      alert(`You've booked a demo for ${name} with email:${email}`);
      setName("");
      setEmail("");
    }
  };
  return (
    <section id="apply">
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
          <form>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete="off"
              name="name"
              type="name"
              placeholder="Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              name="email"
              type="email"
              placeholder="Email"
            />
            <button onClick={handleSubmit} type="submit">
              book a demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
