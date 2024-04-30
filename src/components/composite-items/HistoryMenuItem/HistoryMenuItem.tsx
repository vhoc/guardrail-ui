import React from "react";
import "@fontsource-variable/open-sans";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource-variable/inter";
import styles from "./HistoryMenuItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEllipsis,
  faAsterisk,
  faRectangleList,
  faBook,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ActionButtonsBar from "./ActionButtonsBar/ActionButtonsBar";
import HistoryMenuItemButton from "../../buttons/HistoryMenuItemButton/HistoryMenuItemButton";

interface HistoryMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  starred?: boolean | undefined;
  time?: string | undefined;
  description?: string | undefined;
  isFavorite?: boolean | undefined;
  starIcon?: boolean | undefined;
  listIcon?: boolean | undefined;
  booksIcon?: boolean | undefined;
  onClickEdit?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickShare?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickStar?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickTrash?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  selected?: boolean | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const HistoryMenuItem: React.FC<HistoryMenuItemProps> = (
  props,
): JSX.Element => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={`${styles.container} ${!open ? styles.collapsed : ""} ${props.selected ? styles.selected : ""}`}
      {...props}
    >
      {/* TOP BAR */}
      <div className={styles.topBar} onClick={props.onClick}>
        <div className={styles.timeSection}>
          {props.isFavorite ? (
            <FontAwesomeIcon icon={faStar} color={"#9F68CA"} size={"xs"} />
          ) : null}
          <span className={styles.timeTag}>{props.time}</span>
        </div>

        <div className={styles.topBarEnd}>
          <div className={styles.topIcons}>
            {props.starIcon ? (
              <FontAwesomeIcon
                icon={faAsterisk}
                color={"#9F68CA"}
                size={"xs"}
              />
            ) : null}
            {props.listIcon ? (
              <FontAwesomeIcon
                icon={faRectangleList}
                color={"#9F68CA"}
                size={"xs"}
              />
            ) : null}
            {props.booksIcon ? (
              <FontAwesomeIcon icon={faBook} color={"#9F68CA"} size={"xs"} />
            ) : null}
          </div>
          <button onClick={() => setOpen((prevState) => !prevState)}>
            <FontAwesomeIcon
              icon={open ? faTimes : faEllipsis}
              color={"#E3C5FB"}
            />
          </button>
        </div>
      </div>

      {/* ACTION ICONS BAR */}
      <ActionButtonsBar open={open}>
        <HistoryMenuItemButton
          open={open}
          actionType={"edit"}
          size={"sm"}
          onClick={props.onClickEdit}
        />
        <HistoryMenuItemButton
          open={open}
          actionType={"share"}
          size={"sm"}
          onClick={props.onClickShare}
        />
        <HistoryMenuItemButton
          open={open}
          actionType={"star"}
          size={"sm"}
          onClick={props.onClickStar}
        />
        <HistoryMenuItemButton
          open={open}
          actionType={"trash"}
          size={"sm"}
          onClick={props.onClickTrash}
        />
      </ActionButtonsBar>

      {/* DESCRIPTION */}
      <p className={styles.description} onClick={props.onClick}>
        {props.description}
      </p>
    </div>
  );
};

export default HistoryMenuItem;
