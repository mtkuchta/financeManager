import styles from "./SearchAndSortBar.module.css";
import { ReactComponent as IconSearch } from "../../assets/icons/icon-search.svg";
import { ReactComponent as IconFilter } from "../../assets/icons/icon-filter-mobile.svg";
import { ReactComponent as IconSort } from "../../assets/icons/icon-sort-mobile.svg";

import { sortOptions } from "../../assets/constants/sortOptions";

import { Select } from "../Select/Select";
import { useState } from "react";

export function SearchAndSortBar({
  categories,
  isMobile,
  columnFilters,
  setColumnFilters,
}) {
  const [isSortSelectOpen, setIsSortSelectOpen] = useState(false);
  const [isFilterSelectOpen, setIsFilterSelectOpen] = useState(false);

  const transactionName =
    columnFilters.find((f) => f.id === "name")?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    );

  const handleOpenSelects = (event) => {
    const currentSelectId = event.target.parentElement.id;

    if (currentSelectId === "select_sort") {
      setIsSortSelectOpen(!isSortSelectOpen);
      setIsFilterSelectOpen(false);
    } else {
      setIsFilterSelectOpen(!isFilterSelectOpen);
      setIsSortSelectOpen(false);
    }
  };

  const handleFilterCategory = (e) => {
    setColumnFilters((prev) => {
      const statuses = prev.find((filter) => filter.id === "category")?.value;

      if (!statuses)
        return prev.concat({ id: "category", value: e.target.value });

      if (e.target.value === "All transactions")
        return prev.filter((f) => f.id != "category");

      return prev
        .filter((f) => f.id != "category")
        .concat({ id: "category", value: e.target.value });
    });
  };

  return (
    <div className={styles.searchAndSortBar}>
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search transaction"
          value={transactionName}
          onChange={(e) => onFilterChange("name", e.target.value)}
        />
        <IconSearch />
      </div>
      <div className={styles.selectsContainer}>
        {!isMobile && <span className={styles.selectText}>Sort by</span>}
        <Select
          name="sort"
          options={sortOptions}
          isOpen={isMobile ? isSortSelectOpen : true}
          openHandler={handleOpenSelects}
          isMobile={isMobile}
        >
          <IconSort id="select_sort" />
        </Select>
        {!isMobile && <span className={styles.selectText}>Category</span>}
        <Select
          name="filter"
          options={categories}
          isOpen={isMobile ? isFilterSelectOpen : true}
          openHandler={handleOpenSelects}
          isMobile={isMobile}
          // value={"All categories"}
          onChangeHandler={handleFilterCategory}
        >
          <IconFilter id="select_filter" />
        </Select>
      </div>
    </div>
  );
}
