import React from "react";
import styles from "./RoundHamburgerButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface RoundHamburgerButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const RoundHamburgerButton: React.FC<RoundHamburgerButtonProps> = (
  props,
): JSX.Element => {
  return (
    <button className={styles.container} onClick={props.onClick} {...props}>
      <FontAwesomeIcon icon={faBars} color={"#23293B"} />
    </button>
  );
};

export default RoundHamburgerButton;
