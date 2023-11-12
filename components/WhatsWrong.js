"use client"
import Link from "next/link";
import { VerifyAgain } from "./VerifyAgain";
import { SupportMail } from "./SupportMail";
import styles from "../styles/WhatsWrong.module.scss";
import { useState } from "react";


export const WhatsWrong = ({ supportContent, textContent, wrongContent }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const handleButtonClick = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <h4 className={styles.wrong__text}>{wrongContent.whatsWrong}</h4>
      <div className={styles.wrong__btn__container}>
        <button
          type="button"
          onClick={handleButtonClick}
          className={styles.wrong__btn}
        >
          {wrongContent.openList}
        </button>
      </div>

      {isListVisible && (
        <div className={styles.wrong__list__container}>
          <h4 className={styles.wrong__list__text}>
            {wrongContent.list.title}
          </h4>
          <ol className={styles.wrong__list}>
            <li className={styles.wrong__item}>
              <p>1. {wrongContent.list.fields.first}</p>
              <div className={styles.wrong__btn__container}>
                <Link
                  href={"/registration"}
                  className={styles.wrong__btn}
                  target="_blank"
                >
                  {wrongContent.list.fields.firstBtn}
                </Link>
              </div>
            </li>
            <li className={styles.wrong__item}>
              <p>2. {wrongContent.list.fields.second}</p>
            </li>
            <li className={styles.wrong__item}>
              <p>3. {wrongContent.list.fields.third}</p>
              <VerifyAgain textContent={textContent} />
            </li>
            <li className={styles.wrong__item}>
              <p>4. {wrongContent.list.fields.fourth}</p>
              <SupportMail supportContent={supportContent} />
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};