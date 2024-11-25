import styles from "./SearchAndSortBar.module.css";
import { ReactComponent as IconSearch } from "../../assets/icons/icon-search.svg";
import { ReactComponent as IconFilter } from "../../assets/icons/icon-filter-mobile.svg";
import { ReactComponent as IconSort } from "../../assets/icons/icon-sort-mobile.svg";

import { sortOptions } from "../../assets/constants/sortOptions";

import { Select } from "../Select/Select";

export function SearchAndSortBar() {
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
        <Select name="sort" options={sortOptions}>
          <IconSort />
        </Select>
      </div>
    </div>
  );
}
