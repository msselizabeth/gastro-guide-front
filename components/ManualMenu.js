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
            pathname === "/ua/manual" || pathname === "/manual"
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
            pathname === "/manual/cook-methods"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Методи
        </Link>
      </li>
      <li className={styles.manualMenu__item}>
        <Link
          href={"/manual/chemistry-compound"}
          className={`${
            pathname === "/ua/manual/chemistry-compound" ||
            pathname === "/manual/chemistry-compound"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Хімічний склад
        </Link>
      </li>
      <li className={styles.manualMenu__item}>
        <Link
          href={"/manual/meat"}
          className={`${
            pathname === "/ua/manual/meat" || pathname === "/manual/meat"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Мʼясо та птиця
        </Link>
      </li>
      <li className={styles.manualMenu__item}>
        <Link
          href={"/manual/fish"}
          className={`${
            pathname === "/ua/manual/fish" || pathname === "/manual/fish"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Риба та морепродукти
        </Link>
      </li>
      <li className={styles.manualMenu__item}>
        <Link
          href={"/manual/vegetables"}
          className={`${
            pathname === "/ua/manual/vegetables" ||
            pathname === "/manual/vegetables"
              ? styles.current
              : ""
          } ${styles.manualMenu__link}`}
        >
          Овочі та фрукти
        </Link>
      </li>
    </ul>
  );
};
