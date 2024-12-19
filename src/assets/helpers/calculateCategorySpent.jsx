export function calculateCategorySpent(budgetTransactions) {
  let spent = 0;

  budgetTransactions.map((transaction) => {
    spent += Math.abs(transaction.amount);
  });
  return spent.toFixed(2);
}
