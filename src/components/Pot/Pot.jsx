import { Button } from "../Button/Button";
import { HeaderWithTheme } from "../HeaderWithTheme/HeaderWithTheme";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import { ModalDeleteItem } from "../ModalDeleteItem/ModalDeleteItem";
import { useContext, useState } from "react";
import styles from "./Pot.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";

export function Pot({ pot }) {
  const { pots, deletePot } = useContext(UserDataContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const calculateProgressBarValue = () => {
    return ((pot.total * 100) / pot.target).toFixed(2);
  };

  const handleDeletePot = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <ItemContainer>
      <HeaderWithTheme
        text={pot.name}
        theme={pot.theme}
        itemType="pot"
        handleDeleteItem={handleDeletePot}
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
        <Button text="+Add money" color="secondary" size="small" />
        <Button text="Withdraw" color="secondary" size="small" />
      </div>
      <ModalDeleteItem
        isModalOpen={isDeleteModalOpen}
        onCloseModal={() => setIsDeleteModalOpen(false)}
        itemName={pot.name}
        deleteHandler={deletePot}
      />
    </ItemContainer>
  );
}
