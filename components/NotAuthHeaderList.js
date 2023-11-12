import Link from "next/link";
import styles from "../styles/NotAuthList.module.scss";

export const NotAuthHeaderList = ({ textAuth, textRegister }) => {
  return (
    <ul className={styles.auth__list}>
      <li>
        <Link
          href="/authorization"
          className={`${styles.auth__list__link} ${styles.auth__list__link__auth}`}
        >
          {textAuth}
        </Link>
      </li>
      <li>
        <Link
          href="/registration"
          className={`${styles.auth__list__link} ${styles.auth__list__link__register}`}
        >
          {textRegister}
        </Link>
      </li>
    </ul>
  );
};
