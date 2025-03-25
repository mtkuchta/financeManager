import styles from "./PotOperationsForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../Button/Button";

export function PotOperationsForm({ pot }) {
  const { register, watch } = useForm();

  const watchAmount = Number(watch("amount", 0));

  const calculateProgressBarValue = () => {
    return ((pot.total * 100) / pot.target).toFixed(2);
  };

  return (
    <form>
      <div>
        <div className={styles.descriptionContainer}>
          <span className={styles.operationsText}>New Amount</span>
          <span className={styles.newAmount}>{`$${
            pot.total + watchAmount
          }`}</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressBarValue}
            style={{
              width: `${calculateProgressBarValue()}%`,
            }}
          ></div>
        </div>
      </div>

      <label htmlFor="amount" className={styles.label}>
        Pot Name
      </label>
      <input
        className={styles.inputText}
        type="text"
        name="amount"
        id="amount"
        placeholder="$ 400"
        {...register("amount")}
      />
      <Button text="Confirm Addition" type="submit" size="large" />
    </form>
  );
}
