import styles from "./MenuBar.module.css";
import { menuCategories } from "../../assets/constants/menuCategories";

import { Logo } from "../Logo/Logo";

export function MenuBar({ windowSize }) {
  console.log(menuCategories);
  return (
    <div className={styles.menuWrapper}>
      <nav className={styles.navigation}>
        {windowSize == "desktop" && <Logo />}
        <ul className={styles.navigationList}>
          {menuCategories.map((category) => {
            return (
              <li key={category.name}>
                {/* <img src={category.icon} alt={category.name} /> */}
                <div className={styles.iconContainer}>
                  <category.icon />
                </div>
                {windowSize !== "mobile" && <span>{category.name}</span>}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
