import React from "react";
import styles from "./HighLightsSection.module.scss";
import HighlightItem from "@/components/elements/HighlightItem";
import iconChat from "@/assets/img/icon-chat.png";
import iconMoney from "@/assets/img/icon-money.png";
import iconSecurity from "@/assets/img/icon-security.png";

const HighLightsSection = () => {
  return (
    <div className={styles.container}>
      <HighlightItem
        icon={iconChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in just a few clicks."
      />
      <HighlightItem
        icon={iconMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <HighlightItem
        icon={iconSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </div>
  );
};

export default HighLightsSection;
