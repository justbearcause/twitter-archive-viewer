import React from "react";
import "./global.css";
import styles from "./layout.module.css";

const Layout = ({ children }: { children: any }) => (
  <main className={styles.centerColumn}>{children}</main>
);

export default Layout;
