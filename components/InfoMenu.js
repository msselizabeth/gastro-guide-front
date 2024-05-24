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
            pathname === "/uk/info" || pathname === "/en/info"
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
            pathname === "/uk/info/author" ||
            pathname === "/en/info/author"
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
            pathname === "/uk/info/terms" ||
            pathname === "/en/info/terms"
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
