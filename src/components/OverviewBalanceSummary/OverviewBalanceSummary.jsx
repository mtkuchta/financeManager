import { useContext } from "react";
import styles from "./OverviewBalanceSummary.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";

export function OverviewBalanceSummary() {
  const { balance } = useContext(UserDataContext);

  return (
    <div className={styles.balanceContainer}>
      <div className={styles.item}>
        <p className={styles.balanceText}>Current balance</p>
        <span className={styles.balanceAmount}>{`$${balance.current}`}</span>
      </div>
      <div className={styles.item}>
        <p className={styles.balanceText}>Income</p>
        <span className={styles.balanceAmount}>{`$${balance.income}`}</span>
      </div>
      <div className={styles.item}>
        <p className={styles.balanceText}>Expenses</p>
        <span className={styles.balanceAmount}>{`$${balance.expenses}`}</span>
      </div>
    </div>
  );
}
