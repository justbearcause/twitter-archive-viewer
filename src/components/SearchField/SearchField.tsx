import React from "react";
import { SearchIcon } from "../Icons";
import styles from "./SearchField.module.css";

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

export const SearchField = ({ value, onChange }: Props) => {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search tweets"
        className={styles.searchField}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={styles.searchIconContainer}>
        <SearchIcon className={styles.searchIcon} />
      </div>
    </div>
  );
};
