import styles from "./PotsOverview.module.css";
import { useContext } from "react";
import { ReactComponent as IconPot } from "../../assets/icons/icon-pot.svg";
import { OverviewHeader } from "../OverviewHeader/OverviewHeader";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { OverviewItem } from "../OverviewItem/OverviewItem";

export function PotsOverview() {
  const { pots } = useContext(UserDataContext);

  const calculateTotalPotsValue = () => {
    let totalValue = 0;

    pots.map((pot) => (totalValue += pot.total));
    return totalValue;
  };
  return (
    <div className={styles.potsOverviewContainer}>
      <OverviewHeader name="Pots" destination="pots" />
      <div className={styles.totalSaved}>
        <div className={styles.iconContainer}>
          <IconPot />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>Total saved</p>
          <span
            className={styles.value}
          >{`$${calculateTotalPotsValue()}`}</span>
        </div>
      </div>
      <div className={styles.pots}>
        {pots.map((pot) => (
          <OverviewItem
            key={pot.name}
            name={pot.name}
            theme={pot.theme}
            total={pot.total}
          />
        ))}
      </div>
    </div>
  );
}
