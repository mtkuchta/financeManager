import { useContext } from "react";
import styles from "./TransactionsTable.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { WindowSizeContext } from "../../assets/contexts/WindowSizeContext";

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
    header: "Transaction Date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

export function TransactionsTable() {
  const { windowSize } = useContext(WindowSizeContext);
  const { transactions } = useContext(UserDataContext);
  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getRowModel());

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          {windowSize !== "mobile" &&
            table.getHeaderGroups().map((headerGroup) => (
              <tr
                className={`${styles.tableRow} ${styles.headerRow}`}
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <th className={styles.tableColumn} key={header.id}>
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
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={styles.contentRow}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={styles.contentCell}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
