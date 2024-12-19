import styles from "./BudgetContainer.module.css";

export function BudgetContainer({ children }) {
  return <div className={styles.budgetContainer}>{children}</div>;
}
