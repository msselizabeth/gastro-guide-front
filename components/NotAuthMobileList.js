import styles from "../styles/NotAuthMobileList.module.scss";
import Link from "next/link";

export const NotAuthMobileList = ({ auth, registrate, onClick }) => {
  return (
    <ul className={styles.mobileMenuAuthList}>
      <li className={styles.mobileMenuAuthListItem}>
        <Link
          onClick={onClick}
          href="/authorization"
          className={`${styles.mobileMenuAuthListLink} ${styles.mobileMenuAuthListLinkAuth}`}
        >
          {auth}
        </Link>
      </li>
      <li className={styles.mobileMenuAuthListItem}>
        <Link
          onClick={onClick}
          href="/registration"
          className={`${styles.mobileMenuAuthListLink} ${styles.mobileMenuAuthListLinkRegister}`}
        >
          {registrate}
        </Link>
      </li>
    </ul>
  );
};