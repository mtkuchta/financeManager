import { useState } from "react";

import styles from "./Select.module.css";

export function Select({
  children,
  name,
  isMobile,
  options,
  isOpen,
  openHandler,
  onChangeHandler,
}) {
  return (
    <div className={styles.selectWrapper}>
      {isMobile && (
        <div className={styles.iconContainer} onClick={openHandler}>
          {children}
        </div>
      )}

      {isOpen && (
        <>
          <select
            name={name}
            id=""
            multiple={isMobile ? true : false}
            onChange={onChangeHandler}
            className={styles.transactionsSelect}
          >
            {options.map((option) => (
              <option key={option} className={styles.transactionsOption}>
                {option}
              </option>
            ))}
          </select>
          <span className={styles.customArrow}></span>
        </>
      )}
    </div>
  );
}
