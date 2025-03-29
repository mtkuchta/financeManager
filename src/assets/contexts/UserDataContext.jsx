import { createContext, useState } from "react";
import data from "../data/data.json";
import { findThemeHex } from "../helpers/findThemeHex";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [balance, setBalance] = useState(data.balance);
  const [budgets, setBudgets] = useState(data.budgets);
  const [budgetToEdit, setBudgetToEdit] = useState(null);
  const [pots, setPots] = useState(data.pots);
  const [potToEdit, setPotToEdit] = useState(null);
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

  const addPot = (newPotData) => {
    const newPot = {
      name: newPotData.potName,
      target: Number(newPotData.target),
      theme: findThemeHex(newPotData.theme),
      total: 0,
    };
    setPots((prev) => [...prev, newPot]);
  };

  const editPot = (newData) => {
    setPots((prevItems) =>
      prevItems.map((item) =>
        item.name === potToEdit.name
          ? {
              ...item,
              name: newData.potName,
              target: Number(newData.target),
              theme: findThemeHex(newData.theme),
            }
          : item
      )
    );
    setPotToEdit(null);
  };

  const changePotTotal = (pot, amount, operationType) => {
    setPots((prevItems) =>
      prevItems.map((item) =>
        item.name === pot.name
          ? {
              ...item,
              total:
                operationType === "add"
                  ? pot.total + amount
                  : pot.total - amount,
            }
          : item
      )
    );
  };

  const deletePot = (potToDelete) => {
    const updatedPots = pots.filter((pot) => pot.name !== potToDelete);
    setPots(updatedPots);
  };

  return (
    <UserDataContext.Provider
      value={{
        balance,
        budgets,
        budgetToEdit,
        pots,
        potToEdit,
        transactions,
        setBalance,
        setBudgets,
        setBudgetToEdit,
        setPots,
        setTransactions,
        addBudget,
        editBudget,
        deleteBudget,
        addPot,
        setPotToEdit,
        editPot,
        changePotTotal,
        deletePot,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
