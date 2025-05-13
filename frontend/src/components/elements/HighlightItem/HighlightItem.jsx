import React from "react";
import styles from "./HighlightItem.module.scss";

const HighlightItem = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__icon}>
        <img src={icon} alt={title} />
      </div>
      <div className={styles.container__content}>
        <h3 className={styles.container__content__title}>{title}</h3>
        <p className={styles.container__content__description}>{description}</p>
      </div>
    </div>
  );
};

export default HighlightItem;
