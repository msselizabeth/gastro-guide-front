"use client";
import { useParams, usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import Link from "next/link";

export const Locale = ({ navList }) => {
  const pathname = usePathname();
  const params = useParams();
  const newPath = pathname.slice(0, 1) + pathname.slice(4);

  return (
    <ul className={styles.locale}>
      <li>
        <Link
          href={newPath}
          locale="en"
          className={`${styles.localeLink} ${
            params.locale === "en" ? styles.currentLocale : ""
          }`}
        >
          EN
        </Link>
      </li>
      <li className={styles.localeLine}></li>

      <li>
        <Link
          href={pathname}
          locale="ua"
          className={`${styles.localeLink} ${
            params.locale === "ua" ? styles.currentLocale : ""
          }`}
        >
          УКР
        </Link>
      </li>
    </ul>
  );
};
