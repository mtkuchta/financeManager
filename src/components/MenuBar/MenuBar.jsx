import styles from "./MenuBar.module.css";
import { menuCategories } from "../../assets/constants/menuCategories";

export function MenuBar() {
  return (
    <nav className={styles.menuWrapper}>
      <ul className={styles.navigation}>
        {menuCategories.map((category) => {
          return (
            <li key={category.name}>
              <img src={category.icon} alt="" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
