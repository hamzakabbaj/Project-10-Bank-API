import React from "react";
import styles from "./BalanceCard.module.scss";
import Button from "@/components/base/Button";
const BalanceCard = ({ title, amount, balanceLabel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <h2 className={styles.container__content__title}>{title}</h2>
        <p className={styles.container__content__amount}>
          $
          {amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p className={styles.container__content__balanceLabel}>
          {balanceLabel} Balance
        </p>
      </div>
      <div className={styles.container__button}>
        <Button label="View transactions" />
      </div>
    </div>
  );
};

export default BalanceCard;
