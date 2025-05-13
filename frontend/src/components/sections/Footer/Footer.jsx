import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container__copyright}>Copyright 2020 Argent Bank</p>
    </div>
  );
};

export default Footer;
