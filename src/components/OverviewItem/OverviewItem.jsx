import styles from "./OverviewItem.module.css";

export function OverviewItem({ name, theme, total }) {
  return (
    <div className={styles.item} style={{ "--pot-theme": theme }}>
      <p className={styles.itemName}>{name}</p>
      <span className={styles.itemValue}>{`$${total}`}</span>
    </div>
  );
}
