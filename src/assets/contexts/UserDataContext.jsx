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
        deleteBudget,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
