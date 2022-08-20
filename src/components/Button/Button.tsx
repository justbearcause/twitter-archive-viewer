import classNames from "classnames";
import { IconComponent } from "components/Icons/types";
import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  borderStyle?: "default" | "round";
  className?: string;
  disabled?: boolean;
  icon?: IconComponent;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
};

export const Button = ({
  borderStyle = "default",
  children,
  className,
  disabled,
  icon: Icon,
  onClick,
  title,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.borderStyleDefault]: borderStyle === "default",
        [styles.borderStyleRound]: borderStyle === "round",
      })}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type="button"
    >
      {!!Icon && <Icon className={styles.icon} />}
      {!!children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
