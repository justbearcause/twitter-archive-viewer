import classNames from "classnames";
import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Toggle.module.css";

type ToggleProps = {
  className?: string;
  label?: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
};

export const Toggle = ({ className, label, onChange, value }: ToggleProps) => {
  const inputIdRef = useRef(uuid());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <span className={styles.wrapper}>
        <input
          id={inputIdRef.current}
          type="checkbox"
          checked={value}
          onChange={handleChange}
        />
        <label htmlFor={inputIdRef.current} tabIndex={-1} />
      </span>
      {!!label && (
        <label htmlFor={inputIdRef.current} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
};
