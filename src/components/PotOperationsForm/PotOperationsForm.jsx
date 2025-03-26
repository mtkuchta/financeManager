import styles from "./PotOperationsForm.module.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { UserDataContext } from "../../assets/contexts/UserDataContext";

export function PotOperationsForm({ pot }) {
  const { register, watch, handleSubmit } = useForm();
  const { addToPot } = useContext(UserDataContext);
  const watchAmount = Number(watch("amount", 0));

  const calculateProgressBarValue = () => {
    return ((pot.total * 100) / pot.target).toFixed(2);
  };

  const calculateProgressBarChange = () => {
    return (
      (((pot.total + watchAmount) * 100) / pot.target).toFixed(2) -
      calculateProgressBarValue()
    );
  };

  const calculateNewProgress = () => {
    return (((pot.total + watchAmount) * 100) / pot.target).toFixed(2);
  };

  const onSubmit = (data) => {
    addToPot(pot, Number(data.amount));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.progressBarContainer}>
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
          >{`Total of $${pot.target}`}</span>
        </div>
      </div>

      <label htmlFor="amount" className={styles.label}>
        Amount To Add
      </label>
      <input
        className={styles.inputText}
        type="number"
        name="amount"
        id="amount"
        placeholder="$ 400"
        {...register("amount")}
      />
      <Button text="Confirm Addition" type="submit" size="large" />
    </form>
  );
}
