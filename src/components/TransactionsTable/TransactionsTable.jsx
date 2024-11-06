import { useContext } from "react";
import styles from "./TransactionsTable.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import { flexRender, useReactTable } from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "name",
    header: "Recipent/Sender",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

export function TransactionsTable() {
  const { transactions } = useContext(UserDataContext);
  const table = useReactTable({ transactions, columns });
  console.log(transactions);
  console.log(table.getHeaderGroups());

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
