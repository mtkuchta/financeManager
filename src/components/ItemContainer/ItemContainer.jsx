import styles from "./ItemContainer.module.css";

export function ItemContainer({ children }) {
  return <div className={styles.budgetContainer}>{children}</div>;
}
