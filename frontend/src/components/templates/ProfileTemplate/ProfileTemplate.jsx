import React from "react";
import styles from "./ProfileTemplate.module.scss";
import Button from "@/components/base/Button";
import BalanceCard from "@/components/elements/BalanceCard";

const ProfileTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h1>
          Welcome back
          <br></br>
          Tony Jarvis!
        </h1>
        <div className={styles.container__header__button}>
          <Button label="Edit Name" />
        </div>
      </div>
      <div className={styles.container__balance}>
        <BalanceCard
          title="Argent Bank Checking (x8349)"
          amount={2082.79}
          balanceLabel="Available"
        />
        <BalanceCard
          title="Argent Bank Savings (x6712)"
          amount={10928.42}
          balanceLabel="Available"
        />
        <BalanceCard
          title="Argent Bank Credit Card (x8349)"
          amount={184.3}
          balanceLabel="Current"
        />
      </div>
    </div>
  );
};

export default ProfileTemplate;
