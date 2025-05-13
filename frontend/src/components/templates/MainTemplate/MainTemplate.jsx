import React from "react";
import styles from "./MainTemplate.module.scss";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Outlet } from "react-router-dom";

const MainTemplate = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainTemplate;
