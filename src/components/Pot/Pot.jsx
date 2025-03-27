import { Button } from "../Button/Button";
import { HeaderWithTheme } from "../HeaderWithTheme/HeaderWithTheme";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
import { useContext, useState } from "react";
import styles from "./Pot.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { Modal } from "../Modal/Modal";
import { PotOperationsForm } from "../PotOperationsForm/PotOperationsForm";
import { PotProgressBar } from "../PotProgressBar/PotProgressBar";

export function Pot({ pot, editPot }) {
  const { pots, deletePot } = useContext(UserDataContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleDeletePot = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditPot = (e) => {
    editPot(e);
  };

  return (
    <ItemContainer>
      <HeaderWithTheme
        text={pot.name}
        theme={pot.theme}
        itemType="pot"
        handleDeleteItem={handleDeletePot}
        handleEditItem={handleEditPot}
      />
      <div className={styles.potSummary}>
        <span className={styles.spanText}>Total Saved</span>
        <span className={styles.spanAmount}>{`$${pot.total}`}</span>
      </div>

      <PotProgressBar pot={pot} />
      <div className={styles.potButtonsContainer}>
        <Button
          text="+Add money"
          color="secondary"
          size="small"
          onClick={() => setIsAddModalOpen(true)}
        />
        <Button text="Withdraw" color="secondary" size="small" />
      </div>
      <ModalDeleteItem
        isModalOpen={isDeleteModalOpen}
        onCloseModal={() => setIsDeleteModalOpen(false)}
        itemName={pot.name}
        deleteHandler={deletePot}
      />
      <Modal
        title={`Add to '${pot.name}'`}
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        text="Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance."
      >
        <PotOperationsForm pot={pot} />
      </Modal>
    </ItemContainer>
  );
}
