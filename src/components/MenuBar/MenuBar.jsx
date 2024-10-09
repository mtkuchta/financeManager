import styles from "./MenuBar.module.css";
import { menuCategories } from "../../assets/constants/menuCategories";

export function MenuBar({ windowSize }) {
  return (
    <nav className={styles.menuWrapper}>
      <ul className={styles.navigation}>
        {menuCategories.map((category) => {
          return (
            <li key={category.name}>
              {windowSize == "mobile" || windowSize == "tablet" ? (
                <img src={category.icon} alt={category.name} />
              ) : (
                ""
              )}
              {windowSize !== "mobile" && <span>{category.name}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
