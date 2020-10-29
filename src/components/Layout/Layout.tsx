import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: any }) => (
  <main className={styles.centerColumn}>{children}</main>
);

export default Layout;
