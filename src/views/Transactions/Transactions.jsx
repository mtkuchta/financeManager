import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { TransactionsTable } from "../../components/TransactionsTable/TransactionsTable";

export function Transactions() {
  return (
    <div>
      <ContentHeader />
      <TransactionsTable />
    </div>
  );
}
