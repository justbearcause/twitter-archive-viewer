import React from "react";
import styles from "./ProfileCounter.module.css";

interface Props {
  counter: number;
  text: string;
}

export const ProfileCounter: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.profileCounter}>
      <div className={styles.profileCounterNumber}>
        {formatCounter(props.counter)}
      </div>
      <div className={styles.profileCounterText}>{props.text}</div>
    </div>
  );
};

const formatCounter = (counter: number): string => {
  const isNegative = counter < 0;

  const normalizedCounter = isNegative ? 0 - counter : counter;

  let visibleCounter: number = 0;
  let visiblePostfix: string = "";

  if (normalizedCounter < 1000) {
    visibleCounter = normalizedCounter;
  } else if (normalizedCounter < 1_000_000) {
    visibleCounter = Math.floor(normalizedCounter / 1_000);
    visiblePostfix = "K";
  } else if (normalizedCounter < 1_000_000_000) {
    visibleCounter = Math.floor(normalizedCounter / 1_000_000);
    visiblePostfix = "M";
  }

  return `${isNegative ? "- " : ""}${visibleCounter}${visiblePostfix}`;
};
