import { useContext } from "react";
import { OverviewHeader } from "../OverviewHeader/OverviewHeader";
import styles from "./TransactionsOverview.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { changeDateFormat } from "../../assets/helpers/changeDateFormat";
import { formatAmount } from "../../assets/helpers/formatAmount.js";

export function TransactionsOverview() {
  const { transactions } = useContext(UserDataContext);

  const getFirstTransactions = () => {
    const visibleTransactions = [];
    for (let i = 0; i < 5; i++) {
      visibleTransactions.push(transactions[i]);
    }
    return visibleTransactions;
  };
  console.log(getFirstTransactions());
  return (
    <div className={styles.transactionsOverviewContainer}>
      <OverviewHeader name="Transactions" destination="transactions" />
      {getFirstTransactions().map((transaction) => (
        <div key={transaction.category} className={styles.transaction}>
          <p className={styles.transactionName}>{transaction.name}</p>
          <div className={styles.detailsContainer}>
            <p
              className={styles.transactionAmount}
              style={{
                "--amount-color":
                  transaction.amount > 0
                    ? "var(--color-green)"
                    : "var(--color-grey-900)",
              }}
            >
              {formatAmount(transaction.amount)}
            </p>
            <span className={styles.transactionDate}>
              {changeDateFormat(transaction.date)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
