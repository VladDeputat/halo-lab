import React from "react";
import styles from "./Faq.module.scss";
import data from "./accordion/accordionData";
import AccordionItem from "./accordion/AccordionItem";

const faq = () => {
  return (
    <section>
      <div className={styles.faqContainer}>
        <div>
          <h3 className={styles.heading}>Ready to Get started?</h3>
          <p className={styles.description}>
            When pattern is mentioned in interior design, it is easy to asso- ciate it
            with a geometric patterned wallpaper or colourful prints on interior fabrics.
          </p>
          <a
            className={styles.contactUsBtn}
            href="https://www.halo-lab.com/"
            target="blank"
          >
            Contact us
          </a>
        </div>
        <div>
          <ul>
            {data.map((item) => (
              <AccordionItem data={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default faq;
