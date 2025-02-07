import { ItemContainer } from "../ItemContainer/ItemContainer";
import styles from "./BudgetsSummary.module.css";

import { calculateCategorySpent } from "../../assets/helpers/calculateCategorySpent";
import { formatAmount } from "../../assets/helpers/formatAmount";
import { BudgetsChart } from "../BudgetsChart/BudgetsChart";

export function BudgetsSummary({ budgets, transactions }) {
  return (
    <ItemContainer>
      <BudgetsChart budgets={budgets} transactions={transactions} />
      <span className={styles.title}>Spending summary</span>
      {budgets.map((budget) => (
        <div
          className={styles.budget}
          key={budget.category}
          style={{ "--theme-color": budget.theme }}
        >
          <span className={styles.budgetName}>{budget.category}</span>
          <div className={styles.amountContainer}>
            <span className={styles.budgetSpent}>
              {formatAmount(
                calculateCategorySpent(
                  transactions.filter(
                    (transaction) => transaction.category === budget.category
                  )
                )
              )}
            </span>
            <span className={styles.budgetMaximum}>{` of ${formatAmount(
              budget.maximum
            )}`}</span>
          </div>
        </div>
      ))}
    </ItemContainer>
  );
}
