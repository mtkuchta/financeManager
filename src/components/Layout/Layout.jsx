import styles from "./Layout.module.css";

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import debounce from "lodash/debounce";

import { MenuBar } from "../MenuBar/MenuBar";

export function Layout() {
  const [windowSize, setWindowSize] = useState("desktop");

  useEffect(() => {
    const handleResizeWindow = debounce(() => {
      const currentWindowWidth = window.innerWidth;

      if (currentWindowWidth < 768) {
        setWindowSize("mobile");
      } else if (currentWindowWidth < 1024) {
        setWindowSize("tablet");
      } else {
        setWindowSize("desktop");
      }
    }, 50);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <main>
        <Outlet />
      </main>
      <MenuBar windowSize={windowSize} />
    </div>
  );
}
