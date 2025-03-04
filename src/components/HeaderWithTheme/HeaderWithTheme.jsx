import styles from "./HeaderWithTheme.module.css";
import { useState } from "react";
import { ReactComponent as IconEllipsis } from "../../assets/icons/icon-ellipsis.svg";

export function HeaderWithTheme({
  theme,
  text,
  handleEditItem,
  handleDeleteItem,
  itemType,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.itemHeader}>
      <div className={styles.headerContainer}>
        <div
          className={styles.componentTheme}
          style={{ backgroundColor: theme }}
        ></div>
        <span className={styles.componentText}>{text}</span>
      </div>
      <div className={styles.menuContainer}>
        <IconEllipsis
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuEllipsis}
        />
        {isMenuOpen && (
          <ul className={styles.itemOptions}>
            <li
              className={styles.itemOption}
              onClick={() => {
                handleEditItem();
                setIsMenuOpen(false);
              }}
            >
              {`Edit ${itemType}`}
            </li>
            <li
              className={styles.itemOption}
              onClick={() => {
                handleDeleteItem();
                setIsMenuOpen(false);
              }}
            >
              {`Delete ${itemType}`}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
