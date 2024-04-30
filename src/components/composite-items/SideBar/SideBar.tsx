import React from "react";
import styles from "./SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faPlus } from "@fortawesome/free-solid-svg-icons";
import RoundHamburgerButton from "../../buttons/RoundHamburguerButton/RoundHamburgerButton";
import HistoryMenuItem from "../HistoryMenuItem/HistoryMenuItem";
import FavoritesCounter from "../../feedback/FavoritesCounter/FavoritesCounter";
import { SideBarItemType } from "../../../types/types";

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The width and the maximum width of the SideBar when it's open. */
  width?: string | undefined;
  /** Z-Index CSS property for the SideBar in case it's needed. */
  zIndex?: string | undefined;
  /** Initial array of items marked as favorites. */
  favorites?: Array<SideBarItemType> | undefined;
  /** Initial array of items in the SideBar */
  items?: Array<SideBarItemType> | undefined;
}

export const SideBar: React.FC<SideBarProps> = (props) => {
  const [open, setOpen] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const [selectedFavorite, setSelectedFavorite] = React.useState<number | null>(
    null,
  );
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);
  const [newFavorite, setNewFavorite] = React.useState(false);

  const [newFavorites, setNewFavorites] = React.useState(props.favorites);
  const [newItems, setNewItems] = React.useState(props.items);

  const handleFavoritesChange = (id: number) => {
    if (newFavorites && newFavorites.length >= 1) {
      const foundFavorite = newFavorites.find((item) => item.id === id);

      if (foundFavorite) {
        setNewFavorites((prevState) => {
          if (prevState) {
            return prevState.filter((item) => item.id !== id);
          }
        });
        setNewItems((prevState) => {
          if (prevState) {
            return [...prevState, foundFavorite];
          }
        });
      } else {
        if (newItems && newItems.length >= 1) {
          const itemToAdd = newItems.find((item) => item.id === id);
          if (itemToAdd) {
            setNewFavorites((prevState) => {
              if (prevState) {
                return [...prevState, itemToAdd];
              }
            });
            setNewItems((prevState) => {
              if (prevState) {
                return [...prevState.filter((item) => item.id !== id)];
              }
            });
            setNewFavorite(true);
          }
        }
      }
    }
  };

  const handleFavoriteDelete = (id: number) => {
    if (newFavorites && newFavorites.length >= 1) {
      const filteredFavorites = newFavorites.filter((item) => item.id !== id);
      setNewFavorites(filteredFavorites);
    }
  };

  const handleItemDelete = (id: number) => {
    if (newItems && newItems.length >= 1) {
      const filteredItems = newItems.filter((item) => item.id !== id);
      setNewItems(filteredItems);
    }
  };

  // Completely removes the Sidebar after a delay that should be of the same duration as the collapse animation.
  // It will render the RoundHamburgerButton component instead
  React.useEffect(() => {
    if (open === false) {
      const timeoutHide = setTimeout(() => {
        setHidden(true);
      }, 150);

      return () => clearTimeout(timeoutHide);
    } else {
      const timeoutHide = setTimeout(() => {
        setOpen(true);
      }, 150);

      return () => clearTimeout(timeoutHide);
    }
  }, [open]);

  React.useEffect(() => {
    if (hidden === false) {
      setOpen(true);
    }
  }, [hidden]);

  if (hidden) {
    return (
      <RoundHamburgerButton
        style={{
          marginLeft: "1rem",
        }}
        onClick={() => {
          setHidden(false);
        }}
      />
    );
  }

  return (
    <div
      className={`${styles.container} ${!open ? styles.collapsed : ""}`}
      style={{
        zIndex: props.zIndex,
      }}
      {...props}
    >
      {/* TOP SECTION */}
      <div className={styles.topSection}>
        <button
          className={styles.topLeftSection}
          onClick={() => setOpen(false)}
        >
          <FontAwesomeIcon size={"lg"} icon={faArrowLeftLong} color={"white"} />
          <span className={styles.topLeftButtonText}>Search History</span>
        </button>

        <button className={styles.newButton}>
          <FontAwesomeIcon icon={faPlus} color={"white"} />
          <span>New</span>
        </button>
      </div>

      {/* BOTTOM SECTION */}
      <div className={styles.bottomSection}>
        <div className={styles.favoritesHeader}>
          <div className={styles.label}>Favorites</div>
          <FavoritesCounter
            count={newFavorites ? newFavorites.length : 0}
            newFavorite={newFavorite}
          />
        </div>

        {newFavorites && newFavorites.length >= 1
          ? newFavorites.map((item) => {
              return (
                <HistoryMenuItem
                  key={item.id}
                  time={item.time}
                  description={item.description}
                  onClick={() => {
                    setSelectedFavorite(item.id);
                    setNewFavorite(false);
                  }}
                  selected={
                    selectedFavorite && selectedFavorite === item.id
                      ? true
                      : false
                  }
                  onClickStar={() => handleFavoritesChange(item.id)}
                  onClickTrash={() => handleFavoriteDelete(item.id)}
                  isFavorite
                />
              );
            })
          : null}
        <div style={{ paddingBlock: "0.4rem" }}></div>
        <div className={styles.label}>Today</div>
      </div>

      {/* ITEMS CONTAINER */}
      <div className={styles.itemsContainer}>
        {newItems && newItems.length >= 1
          ? newItems.map((item) => (
              <HistoryMenuItem
                key={item.id}
                time={item.time}
                description={item.description}
                onClick={() => setSelectedItem(item.id)}
                selected={
                  selectedItem && selectedItem === item.id ? true : false
                }
                onClickStar={() => handleFavoritesChange(item.id)}
                onClickTrash={() => handleItemDelete(item.id)}
              />
            ))
          : null}
      </div>
    </div>
  );
};
