import styles from "./Budget.module.css";
import { BudgetStatusBar } from "../BudgetStatusBar/BudgetStatusBar";
import { BudgetSummary } from "../BudgetSummary/BudgetSummary";
import { BudgetTransactions } from "../BudgetTransactions/BudgetTransactions";
import { ItemContainer } from "../ItemContainer/ItemContainer";

import { calculateCategorySpent } from "../../assets/helpers/calculateCategorySpent";
import { useState } from "react";
import { HeaderWithTheme } from "../HeaderWithTheme/HeaderWithTheme";
import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";

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
          itemType="budget"
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
      <ModalDeleteItem
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
        itemType="budget"
        itemName={budget.category}
        deleteHandler={deleteBudget}
      />
    </ItemContainer>
  );
}
