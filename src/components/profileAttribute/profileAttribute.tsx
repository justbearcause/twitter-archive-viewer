import React from "react";
import styles from "./profileAttribute.module.css";

interface Props {
  icon: JSX.Element;
  text: string;
}

export default (props: Props) => {
  return (
    <div className={styles.profileAttribute}>
      <div className={styles.profileAttributeIcon}>{props.icon}</div>
      <div className={styles.profileAttributeText}>{props.text}</div>
    </div>
  );
};
