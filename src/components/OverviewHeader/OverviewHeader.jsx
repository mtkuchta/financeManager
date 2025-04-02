import styles from "./OverviewHeader.module.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IconCaretRight } from "../../assets/icons/icon-caret-right.svg";

export function OverviewHeader({ name, destination }) {
  const navigate = useNavigate();
  return (
    <div className={styles.overviewHeader}>
      <p className={styles.name}>{name}</p>
      <div className={styles.link} onClick={() => navigate(`/${destination}`)}>
        <span className={styles.linkText}>See Details</span>
        <IconCaretRight />
      </div>
    </div>
  );
}
