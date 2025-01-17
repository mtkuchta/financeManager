import styles from "./Budgets.module.css";

import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { useContext, useState } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { Budget } from "../../components/Budget/Budget";
import { BudgetsSummary } from "../../components/BudgetsSummary/BudgetsSummary";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";

export function Budgets() {
  const { budgets, transactions, handleDeleteBudget } =
    useContext(UserDataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <ContentHeader>
        <Button text={"+ Add New Budget"} onClick={openModal} />
      </ContentHeader>
      <div className={styles.budgetsContainer}>
        <BudgetsSummary budgets={budgets} transactions={transactions} />
        {budgets.map((budget) => (
          <Budget
            key={budget.category}
            budget={budget}
            budgetTransactions={transactions.filter(
              (transaction) => transaction.category === budget.category
            )}
            deleteBudget={handleDeleteBudget}
          />
        ))}
      </div>
      <Modal
        title={"Add New Budget"}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
