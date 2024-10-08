import styles from "./Layout.module.css";
import { MenuBar } from "../MenuBar/MenuBar";

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <main></main>
      <MenuBar />
    </div>
  );
}
