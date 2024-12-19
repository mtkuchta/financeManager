import { useEffect, useState } from "react";
import styles from "./BudgetsChart.module.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function BudgetsChart({ budgets, transactions }) {
  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const data = [];
    const colors = [];

    budgets.map((budget) => {
      data.push({ name: budget.category, value: budget.maximum });
      colors.push(budget.theme);
    });
    setData(data);
    setColors(colors);
  }, [budgets]);

  function calculateTotalMaximum() {
    let totalMax = 0;

    budgets.map((budget) => {
      totalMax += budget.maximum;
    });
    return totalMax;
  }

  function calculateTotalSpent() {
    let totalSpent = 0;
    const budgetsName = [];

    budgets.map((budget) => budgetsName.push(budget.category));

    transactions.map((transaction) => {
      if (
        budgetsName.includes(transaction.category) &&
        transaction.amount < 0
      ) {
        totalSpent += Math.abs(transaction.amount);
      }
    });
    return totalSpent.toFixed(0);
  }

  return (
    <div className={styles.chartContainer}>
      <PieChart width={240} height={240}>
        <text
          x={120}
          y={120}
          dy={0}
          textAnchor="middle"
          className={styles.textTotal}
        >
          {`$${calculateTotalSpent()}`}
        </text>
        <text
          x={120}
          y={120}
          dy={20}
          textAnchor="middle"
          className={styles.textLimit}
        >
          {`of $${calculateTotalMaximum()} limit`}
        </text>
        <Pie
          data={data}
          innerRadius={90}
          outerRadius={120}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Pie
          data={data}
          innerRadius={75}
          outerRadius={91}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell
              style={{ opacity: 0.75 }}
              key={`cell-${index}`}
              fill={colors[index]}
              className={styles.chartCell}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
