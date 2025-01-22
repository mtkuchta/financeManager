import styles from "./NewBudgetForm.module.css";

import { useForm, Controller } from "react-hook-form";
import { budgetCategories } from "../../assets/constants/budgetCategories";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { themeColors } from "../../assets/constants/themeColors";

export function NewBudgetForm() {
  const { register, control, handleSubmit } = useForm();
  const { budgets } = useContext(UserDataContext);

  const onSubmit = (data) => {
    console.log(data);
  };

  const checkUsedCategories = () => {
    const usedBudgets = [];

    budgets.map((budget) => usedBudgets.push(budget.category));
    return usedBudgets;
  };

  const checkUsedThemes = () => {
    const usedThemes = [];

    budgets.map((budget) => {
      const theme = themeColors.filter(
        (theme) => theme.colorHex === budget.theme
      );
      usedThemes.push(theme[0].value);
    });

    return usedThemes;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <label htmlFor="budgetCategory" className={styles.labelNewBudget}>
        Budget Category
      </label>
      <Controller
        name="budgetCategorySelect"
        control={control}
        defaultValue=""
        rules={{ required: "This field is required" }}
        render={({ field: { onChange, value } }) => (
          <DropdownMenu
            value={value}
            onChange={onChange}
            options={budgetCategories}
            usedOptions={checkUsedCategories()}
            placeholder="Select Category"
          />
        )}
      />
      <label htmlFor="maximumSpend" className={styles.labelNewBudget}>
        Maximum Spend
      </label>
      <input
        className={styles.inputSpend}
        type="number"
        name="maximumSpend"
        id="maximumSpend"
        placeholder="$ e.g. 2000"
        {...register("maximumSpend")}
      />
      <label htmlFor="theme" className={styles.labelNewBudget}>
        Theme
      </label>
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
            usedOptions={checkUsedThemes()}
            placeholder="Select Theme"
            optionThemes={true}
          />
        )}
      />
      {/* <button type="submit">submit</button> */}
      <Button text="Add budget" type="submit" isWide />
    </form>
  );
}
