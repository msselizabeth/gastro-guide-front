import React from "react";
import styles from "../styles/ToggleButtons.module.scss";

export const ToggleButtons = ({ expanded, toggleExpand }) => {
  return (
    <div>
      {!expanded ? (
        <div className={styles.toggleBtnContainer}>
          <button className={styles.expandButton} onClick={toggleExpand}>
            Показати більше
          </button>
        </div>
      ) : (
        <div className={styles.toggleBtnContainer}>
           <button className={styles.collapseButton} onClick={toggleExpand}>
             Згорнути
           </button>
        </div>
      )}
    </div>
  );
};

export default ToggleButtons;
