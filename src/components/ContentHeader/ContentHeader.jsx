import styles from "./ContentHeader.module.css";
import { useLocation } from "react-router-dom";

export function ContentHeader({ children }) {
  const location = useLocation();
  return (
    <header>
      <h1>{location.pathname.substring(1)}</h1>
      <div>{children}</div>
    </header>
  );
}
