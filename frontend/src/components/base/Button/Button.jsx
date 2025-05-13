import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, type, onClick, useContainerWidth = false }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.container__button} ${
          useContainerWidth ? styles.container__button_full_width : ""
        }`}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
