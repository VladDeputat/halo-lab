import React from "react";
import styles from "./Team.module.scss";
import teamMate1 from "../../assets/team/img1.png";
import teamMate2 from "../../assets/team/img2.png";
import teamMate3 from "../../assets/team/img3.png";
import lineVector from "../../assets/team/vector.png";

const Team = () => {
  return (
    <section>
      <div className={styles.teamContainer}>
        <h3 className={styles.heading}>Our top team</h3>
        <p className={styles.description}>
          Learn more about how you can save our planet's nature.
        </p>
        <ul className={styles.teamMateList}>
          <li className={styles.teamMateListItem}>
            <img className={styles.teamMateImg1} src={teamMate1} alt="teammate1" />
          </li>
          <li className={styles.teamMateListItem}>
            <img className={styles.teamMateImg2} src={teamMate2} alt="teammate2" />
          </li>
          <li className={styles.teamMateListItem}>
            <img className={styles.teamMateImg3} src={teamMate3} alt="teammate3" />
          </li>
          <li>
            <img
              className={`${styles.vectorLine} ${styles.vectorLine1}`}
              src={lineVector}
              alt="vector"
            />
          </li>
          <li>
            <img
              className={`${styles.vectorLine} ${styles.vectorLine2}`}
              src={lineVector}
              alt="vector"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Team;
