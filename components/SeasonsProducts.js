"use client"

import { useState, useRef } from "react";
import styles from "../styles/SeasonsProducts.module.scss";
import ToggleButtons from "./ToggleButtons";

export const SeasonsProducts = ({ country, sectionTitle }) => {
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

        <div className={styles.seasonsContainer}>
          <ul
            className={styles.seasonsList}
            style={{ maxHeight: expanded ? "none" : "500px" }}
          >
            {country.seasons &&
              country.seasons.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.seasonsItem} ${
                    !expanded && index >= 2 ? styles.hidden : ""
                  }`}
                >
                  {item.text}
                </li>
              ))}
          </ul>

          {country.seasons && country.seasons.length > 1 && (
            <ToggleButtons expanded={expanded} toggleExpand={toggleExpand} />
          )}
        </div>
      </div>
    </section>
  );
};
