"use client"
import { useParams, usePathname } from "next/navigation";
import styles from "../styles/Header.module.scss";
import Link from "next-intl/link";


export const Locale = ({navList}) => {
  const pathname = usePathname();
  const params = useParams();
  const newPath = pathname.slice(0, 1) + pathname.slice(4);

    return (
      <div className={styles.locale}>
        <Link
          href={newPath}
          locale="en"
          className={`${styles.localeLink} ${
            params.locale === "en" ? styles.currentLocale : ""
          }`}
        >
          EN
        </Link>

        <Link
          href={pathname}
          locale="ua"
          className={`${styles.localeLink} ${
            params.locale === "ua" ? styles.currentLocale : ""
          }`}
        >
          УКР
        </Link>
      </div>
    );
}