import { createContext, useState, useEffect } from "react";
import debounce from "lodash/debounce";

export const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
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

  console.log(windowSize);

  return (
    <WindowSizeContext.Provider
      value={{
        windowSize,
      }}
    >
      {children}
    </WindowSizeContext.Provider>
  );
};

export default WindowSizeProvider;
