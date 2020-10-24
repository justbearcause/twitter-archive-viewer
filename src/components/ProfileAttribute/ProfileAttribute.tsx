import React from "react";
import styles from "./ProfileAttribute.module.css";

interface Props {
  icon: JSX.Element;
  text: string;
}

const ProfileAttribute: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.profileAttribute}>
      <div className={styles.profileAttributeIcon}>{props.icon}</div>
      <div className={styles.profileAttributeText}>{props.text}</div>
    </div>
  );
};

export default ProfileAttribute;
