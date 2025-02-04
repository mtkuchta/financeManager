import { createContext, useState } from "react";
import data from "../data/data.json";
import { findThemeHex } from "../helpers/findThemeHex";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [balance, setBalance] = useState(data.balance);
  const [budgets, setBudgets] = useState(data.budgets);
  const [budgetToEdit, setBudgetToEdit] = useState(null);
  const [pots, setPots] = useState(data.pots);
  const [transactions, setTransactions] = useState(data.transactions);

  const addBudget = (newBudgetData) => {
    const newBudget = {
      category: newBudgetData.budgetCategory,
      maximum: Number(newBudgetData.maximumSpend),
      theme: findThemeHex(newBudgetData.theme),
    };
    setBudgets((prev) => [...prev, newBudget]);
  };

  const editBudget = (newData) => {
    setBudgets((prevItems) =>
      prevItems.map((item) =>
        item.category === budgetToEdit.category
          ? {
              ...item,
              category: newData.budgetCategory,
              maximum: Number(newData.maximumSpend),
              theme: findThemeHex(newData.theme),
            }
          : item
      )
    );
    setBudgetToEdit(null);
  };

  const deleteBudget = (budgetToDelete) => {
    const updatedBudgets = budgets.filter(
      (budget) => budget.category !== budgetToDelete
    );
    setBudgets(updatedBudgets);
  };

  return (
    <UserDataContext.Provider
      value={{
        balance,
        budgets,
        budgetToEdit,
        pots,
        transactions,
        setBalance,
        setBudgets,
        setBudgetToEdit,
        setPots,
        setTransactions,
        addBudget,
        editBudget,
        deleteBudget,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
