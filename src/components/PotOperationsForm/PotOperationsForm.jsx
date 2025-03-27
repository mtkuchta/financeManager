import styles from "./PotOperationsForm.module.css";
import { useContext } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Button } from "../Button/Button";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { PotProgressBar } from "../PotProgressBar/PotProgressBar";

export function PotOperationsForm({ pot }) {
  const { register, watch, handleSubmit } = useForm();
  const { addToPot } = useContext(UserDataContext);
  const watchAmount = Number(watch("amount", 0));

  const onSubmit = (data) => {
    addToPot(pot, Number(data.amount));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.descriptionContainer}>
        <span className={styles.operationsText}>New Amount</span>
        <span className={styles.newAmount}>{`$${
          pot.total + watchAmount
        }`}</span>
      </div>
      <PotProgressBar pot={pot} addValue={watchAmount} />
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
