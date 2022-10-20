import React, {useState} from "react";
import styles from "./AccordionItem.module.scss";

const AccordionItem = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.accordionItem}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? `${styles.questionContainer} + ${styles.isOpen}`
            : `${styles.questionContainer}`
        }
      >
        <p className={styles.question}>{data.question}</p>
        <button className={styles.questionBtn} type="button">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <p className={isOpen ? `${styles.answer}` : `${styles.answer} + ${styles.isShown}`}>
        {data.answer}
      </p>
    </li>
  );
};

export default AccordionItem;
