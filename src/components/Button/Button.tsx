import classNames from "classnames";
import { IconComponent } from "components/Icons/types";
import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  borderStyle?: "default" | "round";
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
  icon?: IconComponent;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  toggled?: boolean;
};

export const Button = ({
  borderStyle = "default",
  children,
  className,
  iconClassName,
  disabled,
  icon: Icon,
  onClick,
  title,
  toggled,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.borderStyleDefault]: borderStyle === "default",
        [styles.borderStyleRound]: borderStyle === "round",
        [styles.toggled]: toggled,
      })}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type="button"
    >
      {!!Icon && <Icon className={classNames(styles.icon, iconClassName)} />}
      {!!children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
