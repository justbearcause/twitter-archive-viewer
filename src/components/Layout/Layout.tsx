import React from "react";
import styles from "./Layout.module.css";

export const Layout = ({ children }: { children: any }) => (
  <main className={styles.centerColumn}>{children}</main>
);
