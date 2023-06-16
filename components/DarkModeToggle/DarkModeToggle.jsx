

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <span className={styles.container}
     onClick={toggle}
     >
      <span className={styles.icon}>🌙</span>
      <span className={styles.icon}>🔆</span>
      <span
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </span>
  );
};

export default DarkModeToggle;
