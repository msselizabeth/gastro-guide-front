"use client"
import { useParams, usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { Link } from "@/navigation";


export const MainNavList = ({navList}) => {

  const pathname = usePathname();
  const { locale } = useParams();

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