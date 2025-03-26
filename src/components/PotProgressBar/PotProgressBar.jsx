import styles from "./PotProgressBar.module.css";

export function PotProgressBar({ pot, addValue }) {
  const calculateProgressBarValue = () => {
    return ((pot.total * 100) / pot.target).toFixed(2);
  };

  const calculateProgressBarChange = () => {
    return (
      (((pot.total + addValue) * 100) / pot.target).toFixed(2) -
      calculateProgressBarValue()
    );
  };

  const calculateNewProgress = () => {
    return (((pot.total + addValue) * 100) / pot.target).toFixed(2);
  };
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.descriptionContainer}>
        <span className={styles.operationsText}>New Amount</span>
        <span className={styles.newAmount}>{`$${pot.total + addValue}`}</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarValue}
          style={{
            width: `${calculateProgressBarValue()}%`,
          }}
        ></div>
        <div
          className={styles.progressBarChange}
          style={{
            "--pot-color": pot.theme,
            width: `${calculateProgressBarChange()}%`,
          }}
        ></div>
      </div>
      <div className={styles.descriptionContainer}>
        <span
          className={styles.newAmountText}
        >{`${calculateNewProgress()}%`}</span>
        <span
          className={styles.operationsText}
        >{`Target of $${pot.target}`}</span>
      </div>
    </div>
  );
}
