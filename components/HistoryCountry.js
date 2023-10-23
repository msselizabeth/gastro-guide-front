"use client"

import styles from "../styles/HistoryCountry.module.scss";
import { useState, useRef } from "react";
import {ToggleButtons} from "./ToggleButtons";


export const HistoryCountry = ({ country, sectionTitle }) => {
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(!expanded);

    if (expanded) {
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle" ref={listRef}>
          {sectionTitle}
        </h2>

        <div className={styles.historyContainer}>
          <ul
            className={styles.historyList}
            style={{ maxHeight: expanded ? "none" : "694px" }}
          >
            {country.history &&
              country.history.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.historyItem} ${
                    !expanded && index >= 1 ? styles.hidden : ""
                  }`}
                >
                  {item.text}
                </li>
              ))}
          </ul>

          {country.history && country.history.length > 1 && (
            <ToggleButtons expanded={expanded} toggleExpand={toggleExpand} />
          )}
        </div>
      </div>
    </section>
  );
};



