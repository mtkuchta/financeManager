import { createContext, useState } from "react";
import data from "../data/data.json";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [balance, setBalance] = useState(data.balance);
  const [budgets, setBudgets] = useState(data.budgets);
  const [pots, setPots] = useState(data.pots);
  const [transactions, setTransactions] = useState(data.transactions);

  const handleDeleteBudget = (budgetToDelete) => {
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
        pots,
        transactions,
        setBalance,
        setBudgets,
        setPots,
        setTransactions,
        handleDeleteBudget,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
