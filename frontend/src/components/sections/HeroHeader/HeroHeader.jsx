import React from "react";
import styles from "./HeroHeader.module.scss";
import heroImage from "@/assets/img/bank-tree.jpeg";

const HeroHeader = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.container__content}>
        <p className={styles.container__content__title}>No fees</p>
        <p className={styles.container__content__title}>No minimum deposit</p>
        <p className={styles.container__content__title}>High interest rates</p>
        <p className={styles.container__content__description}>
          Open a savings account with Argent Bank today!
        </p>
      </div>
    </div>
  );
};

export default HeroHeader;
