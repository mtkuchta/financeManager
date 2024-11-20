import { useContext, useState } from "react";
import styles from "./TransactionsTable.module.css";
import { UserDataContext } from "../../assets/contexts/UserDataContext";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { WindowSizeContext } from "../../assets/contexts/WindowSizeContext";
import { changeDateFormat } from "../../assets/helpers/changeDateFormat";
import { formatAmount } from "../../assets/helpers/formatAmount";
import { PaginationBar } from "../PaginationBar/PaginationBar";

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
    cell: (props) => <p>{changeDateFormat(props.getValue())}</p>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => <p>{formatAmount(props.getValue())}</p>,
  },
];

export function TransactionsTable() {
  const { windowSize } = useContext(WindowSizeContext);
  const { transactions } = useContext(UserDataContext);

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          {windowSize !== "mobile" &&
            table.getHeaderGroups().map((headerGroup) => (
              <tr className={` ${styles.headerRow}`} key={headerGroup.id}>
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
                <td
                  key={cell.id}
                  className={`${styles.contentCell} ${
                    cell.id.includes("amount") && cell.getValue() > 0
                      ? styles.cellIncome
                      : ""
                  }`}
                  id={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationBar table={table} currentPageIndex={pagination.pageIndex} />
    </div>
  );
}
