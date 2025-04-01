import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { OverviewBalanceSummary } from "../../components/OverviewBalanceSummary/OverviewBalanceSummary";

export function Overview() {
  return (
    <div>
      <ContentHeader />
      <OverviewBalanceSummary />
    </div>
  );
}
