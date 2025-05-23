import React from "react";
import styles from "./ProfileTemplate.module.scss";
import Button from "@/components/base/Button";
import BalanceCard from "@/components/elements/BalanceCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "@/features/auth/authThunks";

const ProfileTemplate = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.auth.status);
  const [editNameActive, setEditNameActive] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSave = () => {
    dispatch(updateUserThunk({ firstName, lastName }));
  };

  useEffect(() => {
    if (status === "succeeded") {
      setEditNameActive(false);
    }
  }, [status]);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user.firstName, user.lastName]);

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h1>
          Welcome back
          <br></br>
          {!editNameActive && `${user.firstName} ${user.lastName}!`}
        </h1>
        {editNameActive ? (
          <div className={styles.container__header__editName}>
            <div className={styles.container__header__editName__inputs}>
              <input
                className={styles.container__header__editName__inputs__input}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className={styles.container__header__editName__inputs__input}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={styles.container__header__editName__buttons}>
              <Button label="Save" onClick={handleSave} />
              <Button label="Cancel" onClick={() => setEditNameActive(false)} />
            </div>
          </div>
        ) : (
          <div className={styles.container__header__button}>
            <Button label="Edit Name" onClick={() => setEditNameActive(true)} />
          </div>
        )}
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
