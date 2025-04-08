import { useContext } from "react";
import styles from "./BudgetsOverview.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { BudgetsChart } from "../BudgetsChart/BudgetsChart";
import { OverviewHeader } from "../OverviewHeader/OverviewHeader";
import { OverviewItem } from "../OverviewItem/OverviewItem";

export function BudgetsOverview() {
  const { budgets, transactions } = useContext(UserDataContext);

  return (
    <div className={styles.budgetsOverviewContainer}>
      <OverviewHeader name="Budgets" destination="budgets" />
      <BudgetsChart budgets={budgets} transactions={transactions} />
      <div className={styles.budgets}>
        {budgets.map((budget) => (
          <OverviewItem
            key={budget.category}
            name={budget.category}
            total={budget.maximum}
            theme={budget.theme}
          />
        ))}
      </div>
    </div>
  );
}
