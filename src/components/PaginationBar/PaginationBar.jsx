import styles from "./PaginationBar.module.css";
import { useContext } from "react";
import { ReactComponent as IconCaretLeft } from "../../assets/icons/icon-caret-left.svg";
import { ReactComponent as IconCaretRight } from "../../assets/icons/icon-caret-right.svg";
import { WindowSizeContext } from "../../assets/contexts/WindowSizeContext";
import { getPaginationRange } from "../../assets/helpers/getPaginationRange";

export function PaginationBar({ table, currentPageIndex }) {
  const { windowSize } = useContext(WindowSizeContext);
  const numberOfPages = table.getPageCount();

  const paginationDelta = windowSize === "mobile" ? 1 : 2;
  const isMobile = windowSize === "mobile";

  const paginationRange = getPaginationRange(
    currentPageIndex,
    numberOfPages,
    paginationDelta,
    isMobile
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
      <div className={styles.buttonsContainer}>
        {paginationRange.map((page, index) =>
          page === "..." ? (
            <button key={index} className={styles.buttonSquare}>
              ...
            </button>
          ) : (
            <button
              key={index}
              className={`${styles.buttonSquare} ${
                page == currentPageIndex + 1 ? styles.buttonActive : ""
              }`}
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </button>
          )
        )}
      </div>

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
