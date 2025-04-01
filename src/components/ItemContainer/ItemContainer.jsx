import styles from "./ItemContainer.module.css";

export function ItemContainer({ children, type }) {
  return (
    <div
      className={
        type === "budget" ? styles.budgetContainer : styles.potContainer
      }
    >
      {children}
    </div>
  );
}
