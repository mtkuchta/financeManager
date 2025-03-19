import styles from "./NewPotForm.module.css";
import { useContext } from "react";
import { themeColors } from "../../assets/constants/themeColors";
import { findThemeColorName } from "../../assets/helpers/findThemeColorName";
import { useForm, Controller } from "react-hook-form";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { Button } from "../Button/Button";
import { checkUsedThemes } from "../../assets/helpers/checkUsedThemes";

export function NewPotForm({ potToEdit = null, closeModal }) {
  const { register, control, handleSubmit } = useForm();
  const { pots, addPot } = useContext(UserDataContext);

  const handleAddNewPot = (newPotData) => {
    addPot(newPotData);
    closeModal();
  };

  const onSubmit = (data) => {
    console.log(data);
    if (potToEdit) {
      // handleEditBudget(data);
    } else {
      handleAddNewPot(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label htmlFor="potName" className={styles.labelNewPot}>
        Pot Name
      </label>
      <input
        className={styles.inputText}
        type="text"
        name="potName"
        id="potName"
        placeholder="e.g. Rainy Days"
        {...register("potName")}
      />
      <label htmlFor="target" className={styles.labelNewPot}>
        Maximum Spend
      </label>
      <input
        className={styles.inputText}
        type="number"
        name="target"
        id="target"
        placeholder="$ e.g. 2000"
        {...register("target")}
      />
      <Controller
        name="theme"
        id="theme"
        control={control}
        defaultValue=""
        rules={{ required: "This field is required" }}
        render={({ field: { onChange, value } }) => (
          <DropdownMenu
            value={value}
            onChange={onChange}
            options={themeColors}
            usedOptions={checkUsedThemes(pots)}
            placeholder="Select Theme"
            optionThemes={true}
          />
        )}
      />
      <Button
        text={potToEdit ? "Save Changes" : "Add pot"}
        type="submit"
        size="large"
      />
    </form>
  );
}
