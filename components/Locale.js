"use client"
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.scss";
import Link from "next-intl/link";


export const Locale = ({navList}) => {
  const pathname = usePathname();
  const newPath = pathname.slice(0, 1) + pathname.slice(4);

    return (
      <div className={styles.locale}>
        <Link
          href={newPath}
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