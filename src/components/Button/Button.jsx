import styles from "./Button.module.css";

export function Button({ text, onClick, color = "primary", size = "normal" }) {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[size]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
