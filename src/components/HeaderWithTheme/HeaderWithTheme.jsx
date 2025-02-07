import styles from "./HeaderWithTheme.module.css";

export function HeaderWithTheme({ theme, text }) {
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.componentTheme}
        style={{ backgroundColor: theme }}
      ></div>
      <span className={styles.componentText}>{text}</span>
    </div>
  );
}
