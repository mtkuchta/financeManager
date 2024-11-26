import { useState } from "react";

import styles from "./Select.module.css";

export function Select({
  children,
  name,
  isMobile,
  options,
  isOpen,
  openHandler,
}) {
  return (
    <div className={styles.selectWrapper}>
      {isMobile && (
        <div className={styles.iconContainer} onClick={openHandler}>
          {children}
        </div>
      )}

      {isOpen && (
        <select name={name} id="" multiple={isMobile ? true : false}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
    </div>
  );
}
