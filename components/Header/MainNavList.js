"use client"
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import Link from "next/link";

export const MainNavList = ({navList}) => {

  const pathname = usePathname();

    return (
      <ul className={styles.navList}>
        {navList.map(({ id, title, path, pathEN, pathUA }) => {
          return (
            <li key={id} className={styles.navListItem}>
              <Link
                href={path}
                className={`${styles.navListLink} ${
                  pathname === pathUA || pathname === path
                    ? `${styles.current}`
                    : ""
                }`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
}