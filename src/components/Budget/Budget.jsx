import styles from "./Budget.module.css";
import { ReactComponent as IconEllipsis } from "../../assets/icons/icon-ellipsis.svg";
import { BudgetStatusBar } from "../BudgetStatusBar/BudgetStatusBar";
import { BudgetSummary } from "../BudgetSummary/BudgetSummary";
import { BudgetTransactions } from "../BudgetTransactions/BudgetTransactions";
import { BudgetContainer } from "../BudgetContainer/BudgetContainer";

import { calculateCategorySpent } from "../../assets/helpers/calculateCategorySpent";

export function Budget({ budget, budgetTransactions }) {
  return (
    <BudgetContainer>
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
        spent={calculateCategorySpent(budgetTransactions)}
        color={budget.theme}
      />
      <BudgetSummary
        spent={calculateCategorySpent(budgetTransactions)}
        maximum={budget.maximum}
        theme={budget.theme}
      />
      <BudgetTransactions budgetTransactions={budgetTransactions} />
    </BudgetContainer>
  );
}
