import styles from "./Button.module.css";

export function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
