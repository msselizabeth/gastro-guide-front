import Link from "next/link";
import styles from "../styles/AuthMobileList.module.scss";

export const AuthMobileList = ({ handleLogout, userName , onClick, textExit, textProfile}) => {
  return (
    <div className={styles.auth__list}>
      <p className={styles.user__name}>{userName}</p>
      <div className={styles.auth__container}>
        <button onClick={handleLogout} type="button" className={styles.exit}>
          {textExit}
        </button>
        <Link href="/user-profile" className={styles.profile} onClick={onClick}>
          {textProfile}
        </Link>
      </div>
    </div>
  );
};
