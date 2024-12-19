import styles from "./Budgets.module.css";

import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { useContext } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { Budget } from "../../components/Budget/Budget";
import { BudgetsSummary } from "../../components/BudgetsSummary/BudgetsSummary";

export function Budgets() {
  const { budgets, transactions } = useContext(UserDataContext);
  return (
    <div>
      <ContentHeader />
      <div className={styles.budgetsContainer}>
        <BudgetsSummary budgets={budgets} transactions={transactions} />
        {budgets.map((budget) => (
          <Budget
            key={budget.category}
            budget={budget}
            budgetTransactions={transactions.filter(
              (transaction) => transaction.category === budget.category
            )}
          />
        ))}
      </div>
    </div>
  );
}
