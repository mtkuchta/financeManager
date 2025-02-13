import styles from "./ModalDeleteItem.module.css";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";

export function ModalDeleteItem({
  isModalOpen,
  itemType,
  itemName,
  onCloseModal,
  deleteHandler,
}) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => onCloseModal(false)}
      title={`Delete "${itemName}"?`}
    >
      <p className={styles.modalWarning}>
        {`Are you sure you want to delete this ${itemType}? This action cannot be
        reversed, and all the data inside it will be removed forever.`}
      </p>
      <div className={styles.modalButtonsContainer}>
        <Button
          text={"Yes,Confirm Deletion"}
          color="warning"
          size="large"
          onClick={() => deleteHandler(itemName)}
        />
        <button
          className={styles.modalRejectButton}
          onClick={() => onCloseModal(false)}
        >
          No, I want to go back
        </button>
      </div>
    </Modal>
  );
}
