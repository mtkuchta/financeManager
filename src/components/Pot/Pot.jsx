import { Button } from "../Button/Button";
import { HeaderWithTheme } from "../HeaderWithTheme/HeaderWithTheme";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
import { useContext, useState } from "react";
import styles from "./Pot.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { Modal } from "../Modal/Modal";
import { PotOperationsForm } from "../PotOperationsForm/PotOperationsForm";

export function Pot({ pot, editPot }) {
  const { pots, deletePot } = useContext(UserDataContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const calculateProgressBarValue = () => {
    return ((pot.total * 100) / pot.target).toFixed(2);
  };

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
      <div className={styles.potProgressBar}>
        <div
          className={styles.potProgressBarValue}
          style={{
            "--pot-color": pot.theme,
            width: `${calculateProgressBarValue()}%`,
          }}
        ></div>
      </div>
      <div className={styles.progressBarDescription}>
        <span
          className={styles.progressBarPercent}
        >{`${calculateProgressBarValue()}%`}</span>
        <span>{`Target of ${pot.target}`}</span>
      </div>
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
