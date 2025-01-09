import styles from "./Modal.module.css";
import ReactDom from "react-dom";

export function Modal({ title, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{title}</p>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
