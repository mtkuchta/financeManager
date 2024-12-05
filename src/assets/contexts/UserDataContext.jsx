import { createContext, useState } from "react";
import data from "../data/data.json";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [balance, setBalance] = useState(data.balance);
  const [budgets, setBugets] = useState(data.budgets);
  const [pots, setPots] = useState(data.pots);
  const [transactions, setTransactions] = useState(data.transactions);

  return (
    <UserDataContext.Provider
      value={{
        balance,
        budgets,
        pots,
        transactions,
        setBalance,
        setBugets,
        setPots,
        setTransactions,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
