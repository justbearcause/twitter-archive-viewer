import React from "react";
import styles from "./profileCounter.module.css";

interface Props {
  counter: number;
  text: string;
}

export default (props: Props) => {
  return (
    <div className={styles.profileCounter}>
      <div className={styles.profileCounterNumber}>{props.counter}</div>
      <div className={styles.profileCounterText}>{props.text}</div>
    </div>
  );
};
