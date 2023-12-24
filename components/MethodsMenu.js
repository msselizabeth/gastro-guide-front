"use client";
import { usePathname } from "next/navigation";
import styles from "../styles/MethodsMenu.module.scss";
import Link from "next/link";

export const MethodsMenu = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.methodsMenu}>
      <li className={styles.methodsMenu__item}>
        <Link
          href={"/manual/cook-methods/fry"}
          className={`${
            pathname === "/ua/manual/cook-methods/fry" ||
            pathname === "/manual/cook-methods/fry"
              ? styles.current
              : ""
          } ${styles.methodsMenu__link}`}
        >
          Смаження
        </Link>
      </li>
      <li className={styles.methodsMenu__item}>
        <Link
          href={"/manual/cook-methods/boil"}
          className={`${
            pathname === "/ua/manual/cook-methods/boil" ||
            pathname === "/manual/cook-methods/boil"
              ? styles.current
              : ""
          } ${styles.methodsMenu__link}`}
        >
          Варіння
        </Link>
      </li>
      <li className={styles.methodsMenu__item}>
        <Link
          href={"/manual/cook-methods/stew"}
          className={`${
            pathname === "/ua/manual/cook-methods/stew" ||
            pathname === "/manual/cook-methods/stew"
              ? styles.current
              : ""
          } ${styles.methodsMenu__link}`}
        >
          Тушкування
        </Link>
      </li>
      <li className={styles.methodsMenu__item}>
        <Link
          href={"/manual/cook-methods/bake"}
          className={`${
            pathname === "/ua/manual/cook-methods/bake" ||
            pathname === "/manual/cook-methods/bake"
              ? styles.current
              : ""
          } ${styles.methodsMenu__link}`}
        >
          Запікання
        </Link>
      </li>
      <li className={styles.methodsMenu__item}>
        <Link
          href={"/manual/cook-methods/addition"}
          className={`${
            pathname === "/ua/manual/cook-methods/addition" ||
            pathname === "/manual/cook-methods/addition"
              ? styles.current
              : ""
          } ${styles.methodsMenu__link}`}
        >
          Addition
        </Link>
      </li>
    </ul>
  );
};
