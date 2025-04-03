import styles from "./Overview.module.css";
import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { OverviewBalanceSummary } from "../../components/OverviewBalanceSummary/OverviewBalanceSummary";
import { PotsOverview } from "../../components/PotsOverview/PotsOverview";
import { TransactionsOverview } from "../../components/TransactionsOverview/TransactionsOverview";

export function Overview() {
  return (
    <div>
      <ContentHeader />
      <OverviewBalanceSummary />
      <div className={styles.summaryContainer}>
        <PotsOverview />
        <TransactionsOverview />
      </div>
    </div>
  );
}
