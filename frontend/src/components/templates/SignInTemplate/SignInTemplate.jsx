import React from "react";
import styles from "./SignInTemplate.module.scss";
import SignInContainer from "@/components/sections/SignInContainer";

const SignInTemplate = () => {
  return (
    <div className={styles.container}>
      <SignInContainer />
    </div>
  );
};

export default SignInTemplate;
