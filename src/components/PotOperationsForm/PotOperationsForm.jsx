import styles from "./PotOperationsForm.module.css";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { PotProgressBar } from "../PotProgressBar/PotProgressBar";

export function PotOperationsForm({ pot, operationType, onClose }) {
  const { register, watch, handleSubmit } = useForm();
  const { changePotTotal } = useContext(UserDataContext);
  const watchAmount = Number(watch("amount", 0));

  const onSubmit = (data) => {
    changePotTotal(pot, Number(data.amount), operationType);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.descriptionContainer}>
        <span className={styles.operationsText}>New Amount</span>
        <span className={styles.newAmount}>{`$${
          operationType === "add"
            ? pot.total + watchAmount
            : pot.total - watchAmount
        }`}</span>
      </div>
      <PotProgressBar
        pot={pot}
        amount={watchAmount}
        operationType={operationType}
      />
      <label htmlFor="amount" className={styles.label}>
        {operationType === "add" ? "Amount To Add" : "Amount to Withdraw"}
      </label>
      <input
        className={styles.inputText}
        type="number"
        name="amount"
        id="amount"
        placeholder="$ 400"
        {...register("amount", {
          max: operationType === "withdraw" ? pot.total : "",
        })}
      />
      <Button
        text={operationType === "add" ? "Confirm Addition" : "Confirm Withdraw"}
        type="submit"
        size="large"
      />
    </form>
  );
}
