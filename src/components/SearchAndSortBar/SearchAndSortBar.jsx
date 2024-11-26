import styles from "./SearchAndSortBar.module.css";
import { ReactComponent as IconSearch } from "../../assets/icons/icon-search.svg";
import { ReactComponent as IconFilter } from "../../assets/icons/icon-filter-mobile.svg";
import { ReactComponent as IconSort } from "../../assets/icons/icon-sort-mobile.svg";

import { sortOptions } from "../../assets/constants/sortOptions";

import { Select } from "../Select/Select";
import { useState } from "react";

export function SearchAndSortBar({ categories, isMobile }) {
  const [isSortSelectOpen, setIsSortSelectOpen] = useState(false);
  const [isFilterSelectOpen, setIsFilterSelectOpen] = useState(false);

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

  console.log(isMobile);

  return (
    <div className={styles.searchAndSortBar}>
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search transaction"
        />
        <IconSearch />
      </div>
      <div className={styles.selectsContainer}>
        {!isMobile && <span>Sort by</span>}
        <Select
          name="sort"
          options={sortOptions}
          isOpen={isMobile ? isSortSelectOpen : true}
          openHandler={handleOpenSelects}
          isMobile={isMobile}
        >
          <IconSort id="select_sort" />
        </Select>
        {!isMobile && <span>Category</span>}
        <Select
          name="filter"
          options={categories}
          isOpen={isMobile ? isFilterSelectOpen : true}
          openHandler={handleOpenSelects}
          isMobile={isMobile}
        >
          <IconFilter id="select_filter" />
        </Select>
      </div>
    </div>
  );
}
