import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

import UserDataProvider from "../../assets/contexts/UserDataContext";
import WindowSizeProvider from "../../assets/contexts/WindowSizeContext";

import { MenuBar } from "../MenuBar/MenuBar";

export function Layout() {
  return (
    <div className={styles.wrapper}>
      <WindowSizeProvider>
        <UserDataProvider>
          <MenuBar />
          <main>
            <Outlet />
          </main>
        </UserDataProvider>
      </WindowSizeProvider>
    </div>
  );
}
