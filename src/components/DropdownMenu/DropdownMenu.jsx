import { useState } from "react";
import styles from "./DropdownMenu.module.css";
import { ReactComponent as IconCaretDown } from "../../assets/icons/icon-caret-down.svg";

export function DropdownMenu({
  options,
  usedOptions = [],
  value,
  onChange,
  placeholder,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.control} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.text}>{value || placeholder}</span>
        <div className={styles.arrowContainer}>
          <IconCaretDown />
        </div>
      </div>
      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              key={`select_${option.label}`}
              className={styles.option}
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {usedOptions.includes(option.value) && (
                <span className={styles.isUsed}>Already used</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
