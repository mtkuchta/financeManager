import styles from "./MenuBar.module.css";
import { useContext } from "react";
import { menuCategories } from "../../assets/constants/menuCategories";
import { NavLink } from "react-router-dom";

import { Logo } from "../Logo/Logo";
import { WindowSizeContext } from "../../assets/contexts/WindowSizeContext";

export function MenuBar() {
  const { windowSize } = useContext(WindowSizeContext);
  return (
    <div className={styles.menuWrapper}>
      <nav className={styles.navigation}>
        {windowSize == "desktop" && <Logo />}
        <ul className={styles.navigationList}>
          {menuCategories.map((category) => {
            return (
              <li key={category.name}>
                <NavLink className={styles.navLink} to={category.route}>
                  <div className={styles.iconContainer}>
                    <category.icon />
                  </div>
                  {windowSize !== "mobile" && <span>{category.name}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
