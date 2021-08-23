import React from "react";
import styles from "./button.module.scss";

export const buttonTypes = {
  SM: { title: "SM", className: styles.SM },
  LG: { title: "LG", className: styles.LG },
  LIGHT: { title: "LIGHT", className: styles.LIGHT },
};

export const Button = ({ STYLES = {}, clickHandler, type, children }) => {
  return (
    <button
      className={`${styles.btn} ${STYLES} ${type ? type.className : ""}`}
      onClick={clickHandler ? clickHandler : () => {}}
    >
      {children}
    </button>
  );
};
