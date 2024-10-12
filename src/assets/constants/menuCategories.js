// import iconOverview from "../icons/icon-nav-overview.svg";
import React from "react";
import { ReactComponent as IconOverview } from "../icons/icon-nav-overview.svg";
import { ReactComponent as IconTransactions } from "../icons/icon-nav-transactions.svg";
import { ReactComponent as IconBudgets } from "../icons/icon-nav-budgets.svg";
import { ReactComponent as IconPots } from "../icons/icon-nav-Pots.svg";

export const menuCategories = [
  { name: "Overview", route: "/overview", icon: IconOverview },
  { name: "Transactions", route: "/transactions", icon: IconTransactions },
  { name: "Budgets", route: "/budgets", icon: IconBudgets },
  { name: "Pots", route: "/pots", icon: IconPots },
];
