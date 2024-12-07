import styles from "./BudgetSummary.module.css";

export function BudgetSummary({ maximum, spent, theme }) {
  return (
    <div className={styles.budgetSummary}>
      <div
        className={styles.budgetSummaryItem}
        style={{ "--theme-color": theme }}
      >
        <span>Spent</span>
        <p>${maximum}</p>
      </div>
      <div
        className={styles.budgetSummaryItem}
        style={{ "--theme-color": "#f8f4f0" }}
      >
        <span>Free</span>
        <p>${spent < maximum ? maximum - spent : 0}</p>
      </div>
    </div>
  );
}
