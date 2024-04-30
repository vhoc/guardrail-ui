import React from "react";
import styles from "./ActionButtonsBar.module.css";

interface ActionButtonsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  open?: boolean | undefined;
}

const ActionButtonsBar: React.FC<ActionButtonsBarProps> = (props) => {
  return (
    <div
      className={`${styles.container} ${!props.open ? styles.collapsed : ""}`}
      {...props}
    >
      {/* { props.open ? props.children : null } */}
      {props.children}
    </div>
  );
};

export default ActionButtonsBar;
