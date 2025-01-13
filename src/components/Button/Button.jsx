import styles from "./Button.module.css";

export function Button({ text, onClick, isRed = false, isWide = false }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        backgroundColor: isRed ? "var(--color-red)" : "var(--color-grey-900)",
        width: isWide ? "100%" : "",
      }}
    >
      {text}
    </button>
  );
}
