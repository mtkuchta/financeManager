import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <span>finance</span>
      <span>manager</span>
    </div>
  );
}
