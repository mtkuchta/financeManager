import styles from "./Budget.module.css";
import { ReactComponent as IconEllipsis } from "../../assets/icons/icon-ellipsis.svg";
import { BudgetStatusBar } from "../BudgetStatusBar/BudgetStatusBar";
import { BudgetSummary } from "../BudgetSummary/BudgetSummary";
import { BudgetTransactions } from "../BudgetTransactions/BudgetTransactions";

export function Budget({ budget, budgetTransactions }) {
  const calculateSpent = () => {
    let spent = 0;

    budgetTransactions.map((transaction) => {
      spent += Math.abs(transaction.amount);
    });
    return spent.toFixed(2);
  };

  return (
    <div className={styles.budgetContainer}>
      <div className={styles.budgetHeader}>
        <div
          className={styles.budgetTheme}
          style={{ backgroundColor: budget.theme }}
        ></div>
        <span className={styles.budgetName}>{budget.category}</span>
        <IconEllipsis />
      </div>
      <BudgetStatusBar
        maximum={budget.maximum}
        spent={calculateSpent()}
        color={budget.theme}
      />
      <BudgetSummary
        spent={calculateSpent()}
        maximum={budget.maximum}
        theme={budget.theme}
      />
      <BudgetTransactions budgetTransactions={budgetTransactions} />
    </div>
  );
}
