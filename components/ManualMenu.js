"use client";
import { usePathname } from "next/navigation";
import styles from "../styles/ManualMenu.module.scss";
import Link from "next/link";

export const ManualMenu = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.manualMenu}>
      <li className={styles.manualMenu__item}>
        <Link
          href={"/manual"}
          className={`${
            pathname === "/ua/manual" || pathname === "/en/manual"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Menu
        </Link>
      </li>
      <li className={styles.manualMenu__item}>
        <Link
          href={"/manual/cook-methods"}
          className={`${
            pathname === "/ua/manual/cook-methods" ||
            pathname === "/en/manual/cook-methods"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Cook Methods
        </Link>
      </li>
    </ul>
  );
};
