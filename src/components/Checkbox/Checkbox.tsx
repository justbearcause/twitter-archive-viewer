import classNames from "classnames";
import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  className?: string;
  label?: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
};

export const Checkbox = ({
  className,
  label,
  onChange,
  value,
}: CheckboxProps) => {
  const onlyWithMediaId = useRef(uuid());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <input
        id={onlyWithMediaId.current}
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
      {!!label && <label htmlFor={onlyWithMediaId.current}>{label}</label>}
    </div>
  );
};
