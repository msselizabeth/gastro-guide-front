"use client"
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.scss";
import Link from "next-intl/link";


export const Locale = ({navList}) => {
  const pathname = usePathname();

    return (
      <div className={styles.locale}>
        <Link
          href={pathname.substring(3)}
          locale="en"
          className={styles.localeLink}
        >
          EN
        </Link>

        <Link href={pathname} locale="ua" className={styles.localeLink}>
          УКР
        </Link>
      </div>
    );
}