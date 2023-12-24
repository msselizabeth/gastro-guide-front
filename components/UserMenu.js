"use client"
import { usePathname } from "next/navigation";
import styles from "../styles/UserMenu.module.scss";
import Link from "next/link";


export const UserMenu = ({ profileText, recipesText, favotitesText }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.userMenu}>
      <li className={styles.userMenu__item}>
        <Link
          href={"/user-profile"}
          className={`${
            pathname === "/ua/user-profile" || pathname === "/user-profile"
              ? styles.current
              : ""
          } ${styles.userMenu__link}`}
        >
          {profileText}
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Link
          href={"/user-profile/recipes"}
          className={`${
            pathname === "/ua/user-profile/recipes" ||
            pathname === "/user-profile/recipes"
              ? styles.current
              : ""
          } ${styles.userMenu__link}`}
        >
          {recipesText}
        </Link>
      </li>
      <li className={styles.userMenu__item}>
        <Link
          href={"/user-profile/favorite"}
          className={`${
            pathname === "/ua/user-profile/favorite" ||
            pathname === "/user-profile/favorite"
              ? styles.current
              : ""
          } ${styles.userMenu__link}`}
        >
          {favotitesText}
        </Link>
      </li>
    </ul>
  );
};