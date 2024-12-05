import styles from "./Budgets.module.css";

import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { useContext } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { Budget } from "../../components/Budget/Budget";

export function Budgets() {
  const { budgets, transactions } = useContext(UserDataContext);
  console.log(budgets, transactions);
  return (
    <div>
      <ContentHeader />
      <div className={styles.budgetsContainer}>
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
