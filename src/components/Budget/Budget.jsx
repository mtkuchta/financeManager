import styles from "./Budget.module.css";
import { ReactComponent as IconEllipsis } from "../../assets/icons/icon-ellipsis.svg";
import { BudgetStatusBar } from "../BudgetStatusBar/BudgetStatusBar";
import { BudgetSummary } from "../BudgetSummary/BudgetSummary";
import { BudgetTransactions } from "../BudgetTransactions/BudgetTransactions";
import { ItemContainer } from "../ItemContainer/ItemContainer";

import { calculateCategorySpent } from "../../assets/helpers/calculateCategorySpent";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";
import { HeaderWithTheme } from "../HeaderWithTheme/HeaderWithTheme";

export function Budget({
  budget,
  budgetTransactions,
  deleteBudget,
  editBudget,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditBudget = (e) => {
    editBudget(e);
  };

  const handleDeleteBudget = () => {
    setIsModalOpen(true);
  };

  return (
    <ItemContainer>
      <div className={styles.budgetHeader}>
        <HeaderWithTheme
          theme={budget.theme}
          text={budget.category}
          handleDeleteItem={handleDeleteBudget}
          handleEditItem={handleEditBudget}
        />
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
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Delete "${budget.category}"?`}
      >
        <p className={styles.modalWarning}>
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>
        <div className={styles.modalButtonsContainer}>
          <Button
            text={"Yes,Confirm Deletion"}
            color="warning"
            size="large"
            onClick={() => deleteBudget(budget.category)}
          />
          <button
            className={styles.modalRejectButton}
            onClick={() => setIsModalOpen(false)}
          >
            No, I want to go back
          </button>
        </div>
      </Modal>
    </ItemContainer>
  );
}
