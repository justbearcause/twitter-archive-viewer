import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation: React.FunctionComponent = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to="/tweets" className={styles.item}>
        Tweets
      </NavLink>
      <NavLink to="/likes" className={styles.item}>
        Likes
      </NavLink>
      <NavLink to="/media" className={styles.item}>
        Media
      </NavLink>
    </div>
  );
};
