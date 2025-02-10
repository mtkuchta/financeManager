import { Button } from "../Button/Button";
import { HeaderWithTheme } from "../HeaderWithTheme/HeaderWithTheme";
import { ItemContainer } from "../ItemContainer/ItemContainer";
import styles from "./Pot.module.css";

export function Pot({ pot }) {
  const calculateProgressBarValue = () => {
    return ((pot.total * 100) / pot.target).toFixed(2);
  };

  return (
    <ItemContainer>
      <HeaderWithTheme text={pot.name} theme={pot.theme} />
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
        <Button text="+Add money" color="secondary" />
        <Button text="Withdraw" color="secondary" />
      </div>
    </ItemContainer>
  );
}
