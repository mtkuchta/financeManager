import styles from "./Overview.module.css";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { OverviewBalanceSummary } from "../../components/OverviewBalanceSummary/OverviewBalanceSummary";
import { PotsOverview } from "../../components/PotsOverview/PotsOverview";

export function Overview() {
  return (
    <div>
      <ContentHeader />
      <OverviewBalanceSummary />
      <div className={styles.summaryContainer}>
        <PotsOverview />
      </div>
    </div>
  );
}
