import React from "react";
import styles from "./HomeTemplate.module.scss";
import HeroHeader from "@/components/sections/HeroHeader";
import HighLightsSection from "@/components/sections/HighLightsSection";
const HomeTemplate = () => {
  return (
    <div className={styles.container}>
      <HeroHeader />
      <HighLightsSection />
    </div>
  );
};

export default HomeTemplate;
