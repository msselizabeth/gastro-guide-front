"use client";
import { usePathname } from "next/navigation";
import styles from "../styles/InfoMenu.module.scss";
import Link from "next/link";

export const InfoMenu = ({ infoMenuContent }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.infoMenu}>
      <li className={styles.infoMenu__item}>
        <Link
          href={"/info"}
          className={`${
            pathname === "/ua/info" || pathname === "/info"
              ? styles.current
              : ""
          } ${styles.infoMenu__link}`}
        >
          {infoMenuContent.resource}
        </Link>
      </li>
      <li className={styles.infoMenu__item}>
        <Link
          href={"/info/author"}
          className={`${
            pathname === "/ua/info/author" ||
            pathname === "/info/author"
              ? styles.current
              : ""
          } ${styles.infoMenu__link}`}
        >
          {infoMenuContent.author}
        </Link>
      </li>
      <li className={styles.infoMenu__item}>
        <Link
          href={"/info/terms"}
          className={`${
            pathname === "/ua/info/terms" ||
            pathname === "/info/terms"
              ? styles.current
              : ""
          } ${styles.infoMenu__link}`}
        >
          {infoMenuContent.terms}
        </Link>
      </li>
    </ul>
  );
};
