import React from "react";
import styles from "./SignInContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/base/Input";
import Button from "@/components/base/Button";
import { useDispatch } from "react-redux";
import { loginUser } from "@/features/auth/authThunks";
import { useState } from "react";
import { useSelector } from "react-redux";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        {isAuthenticated && <p>You are signed in</p>}
        {status === "failed" && <p style={{ color: "red" }}>{error}</p>}
        {status === "loading" && <p>Loading...</p>}
      </div>

      <form className={styles.container__form} onSubmit={handleSubmit}>
        <div className={styles.container__form__input}>
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className={styles.container__form__remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>
        <Button label="Sign In" type="submit" />
      </form>
    </div>
  );
};

export default SignInContainer;
