import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, type, placeholder, value, onChange }) => {
  // Create a unique ID for the input based on the label
  const inputId = label
    ? label.toLowerCase().replace(/\s+/g, "-")
    : `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={styles.container}>
      <label className={styles.container__label} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={styles.container__input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
