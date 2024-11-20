import styles from "./PaginationBar.module.css";
import { useContext } from "react";
import { ReactComponent as IconCaretLeft } from "../../assets/icons/icon-caret-left.svg";
import { ReactComponent as IconCaretRight } from "../../assets/icons/icon-caret-right.svg";
import { WindowSizeContext } from "../../assets/contexts/WindowSizeContext";
import { getPaginationRange } from "../../assets/helpers/getPaginationRange";

export function PaginationBar({ table, currentPageIndex }) {
  const { windowSize } = useContext(WindowSizeContext);
  const numberOfPages = table.getPageCount();
  const buttons = Array(numberOfPages).fill("Button");

  const paginationDelta = windowSize === "mobile" ? 2 : 10;

  const paginationRange = getPaginationRange(
    currentPageIndex,
    numberOfPages,
    paginationDelta
  );

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.buttonLong}
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        <IconCaretLeft />
        {windowSize != "mobile" && <span>Prev</span>}
      </button>
      {/* {buttons.map((item, index) => (
        <button
          key={`button_Pag_${index}`}
          className={`${styles.buttonSquare} ${
            index == currentPageIndex ? styles.buttonActive : ""
          }`}
        >
          {index + 1}
        </button>
      ))} */}

      {paginationRange.map((page, index) =>
        page === "..." ? (
          <button key={index} className={styles.buttonSquare}>
            ...
          </button>
        ) : (
          <button
            key={index}
            className={`${styles.buttonSquare} ${
              index == currentPageIndex ? styles.buttonActive : ""
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        className={styles.buttonLong}
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        <IconCaretRight />
        {windowSize != "mobile" && <span>Next</span>}
      </button>
    </div>
  );
}
