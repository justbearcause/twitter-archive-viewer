import classNames from "classnames";
import React from "react";
import styles from "./Skeleton.module.css";

type Props = React.PropsWithChildren<{
  isLoading: boolean;
}>;

export const Skeleton = ({ children, isLoading }: Props) => {
  return (
    <div
      className={classNames(styles.skeleton, { [styles.isLoading]: isLoading })}
    >
      {children}
    </div>
  );
};
