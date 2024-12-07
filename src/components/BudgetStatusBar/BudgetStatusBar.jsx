import styles from "./BudgetStatusBar.module.css";

export function BudgetStatusBar({ maximum, spent, color }) {
  const calculateStatusBarFill = () => {
    return spent < maximum ? (spent * 100) / maximum : 100;
  };

  console.log(`${calculateStatusBarFill()}%`);
  return (
    <div className={styles.statusBarContainer}>
      <span className={styles.text}>{`Maximum of $${maximum}`}</span>
      <div className={styles.statusBar}>
        <div
          className={styles.statusBarFill}
          style={{
            backgroundColor: color,
            width: `${calculateStatusBarFill()}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
