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

const operationModalTexts = {
  add: "Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance.",
  withdraw:
    "Withdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot.",
};

export function Pot({ pot, editPot }) {
  const { deletePot } = useContext(UserDataContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [potOperation, setPotOperation] = useState(null);

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
          onClick={() => setPotOperation("add")}
        />
        <Button
          text="Withdraw"
          color="secondary"
          size="small"
          onClick={() => setPotOperation("withdraw")}
        />
      </div>
      <ModalDeleteItem
        isModalOpen={isDeleteModalOpen}
        onCloseModal={() => setIsDeleteModalOpen(false)}
        itemName={pot.name}
        deleteHandler={deletePot}
      />
      <Modal
        title={
          potOperation === "add"
            ? `Add to '${pot.name}'`
            : `Withdraw from '${pot.name}'`
        }
        isOpen={potOperation}
        onClose={() => setPotOperation(null)}
        text={
          potOperation === "add"
            ? operationModalTexts.add
            : operationModalTexts.withdraw
        }
      >
        <PotOperationsForm
          pot={pot}
          operationType={potOperation}
          onClose={() => setPotOperation(null)}
        />
      </Modal>
    </ItemContainer>
  );
}
