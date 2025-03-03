import styles from "./Modal.module.css";
import ReactDom from "react-dom";
import { ReactComponent as IconCloseModal } from "../../assets/icons/icon-close-Modal.svg";

export function Modal({ title, isOpen, onClose, children, text }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <p className={styles.modalTitle}>{title}</p>
          <button className={styles.closeButton} onClick={onClose}>
            <IconCloseModal />
          </button>
        </div>
        {text && <p className={styles.modalText}>{text}</p>}
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
