import styles from "./PotProgressBar.module.css";

export function PotProgressBar({ pot, amount = 0, operationType }) {
  const calculateProgressBarValue = () => {
    if (operationType === "add") {
      return ((pot.total * 100) / pot.target).toFixed(2);
    }

    if (amount > pot.total) return 0;
    return (((pot.total - amount) * 100) / pot.target).toFixed(2);
  };

  const calculateProgressBarChange = () => {
    if (operationType === "add") {
      return (
        (((pot.total + amount) * 100) / pot.target).toFixed(2) -
        calculateProgressBarValue()
      );
    }
    if (amount > pot.total) return ((pot.total * 100) / pot.target).toFixed(2);
    return ((amount * 100) / pot.target).toFixed();
  };

  const calculateNewProgress = () => {
    if (operationType === "add" || operationType == null) {
      return (((pot.total + amount) * 100) / pot.target).toFixed(2);
    }
    if (amount > pot.total) return 0;
    return (((pot.total - amount) * 100) / pot.target).toFixed(2);
  };
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarValue}
          style={{
            width: `${calculateProgressBarValue()}%`,
          }}
        ></div>
        {amount !== 0 && (
          <div
            className={styles.progressBarChange}
            style={{
              backgroundColor:
                operationType === "add" ? "var(--color-green)" : "red",
              width: `${calculateProgressBarChange()}%`,
            }}
          ></div>
        )}
      </div>
      <div className={styles.descriptionContainer}>
        <span
          className={styles.newAmountText}
          style={{
            color:
              amount != 0
                ? operationType === "add"
                  ? "var(--color-green)"
                  : "red"
                : "",
          }}
        >{`${calculateNewProgress()}% ${
          amount > pot.total ? "Withdraw can't be greater than amount!" : ""
        }`}</span>
        <span
          className={styles.operationsText}
        >{`Target of $${pot.target}`}</span>
      </div>
    </div>
  );
}
