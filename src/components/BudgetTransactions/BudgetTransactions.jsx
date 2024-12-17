import styles from "./BudgetTransactions.module.css";

import { ReactComponent as IconCaretRight } from "../../assets/icons/icon-caret-right.svg";
import { ReactComponent as IconCaretLeft } from "../../assets/icons/icon-caret-left.svg";
import { changeDateFormat } from "../../assets/helpers/changeDateFormat";
import { formatAmount } from "../../assets/helpers/formatAmount";
import { useEffect, useState } from "react";

export function BudgetTransactions({ budgetTransactions }) {
  const [visibleTransactions, setVisibleTransactions] = useState(
    budgetTransactions.slice(0, 3)
  );
  const [isAllTransactionsVisible, setIsAllTransactionsVisible] =
    useState(false);

  useEffect(() => {
    if (isAllTransactionsVisible) {
      setVisibleTransactions(budgetTransactions);
    } else {
      setVisibleTransactions(budgetTransactions.slice(0, 3));
    }
  }, [isAllTransactionsVisible]);

  const handleShowTransactions = () => {
    setIsAllTransactionsVisible(!isAllTransactionsVisible);
  };
  console.log(budgetTransactions.length >= 4);

  return (
    <div className={styles.budgetTransactionsContainer}>
      <header className={styles.budgetTransactionsHeader}>
        <span>Latest Spending</span>
        <button onClick={handleShowTransactions}>
          {budgetTransactions.length >= 4 && (
            <>
              <span>{!isAllTransactionsVisible ? "See all" : "See less"}</span>
              {isAllTransactionsVisible ? (
                <IconCaretLeft />
              ) : (
                <IconCaretRight />
              )}
            </>
          )}
        </button>
      </header>
      <ul>
        {visibleTransactions.map((transaction) => (
          <li key={transaction.name} className={styles.transaction}>
            <p>{transaction.name}</p>
            <div className={styles.transactionDetails}>
              <p>{formatAmount(transaction.amount)}</p>
              <p className={styles.transactionDate}>
                {changeDateFormat(transaction.date)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
