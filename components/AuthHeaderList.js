import styles from "../styles/AuthListHeader.module.scss";
import Link from "next/link";

export const AuthHeaderList = ({handleLogout, userName, textExit, textProfile}) => {
    return (
      <div className={styles.auth__list}>
        <p className={styles.user__name}>{userName}</p>
        <div className={styles.auth__container}>
          <button onClick={handleLogout} type="button" className={styles.exit}>
            {textExit}
          </button>
          <Link
            href="/user-profile"
            className={styles.profile}
          >
            {textProfile}
          </Link>
        </div>
      </div>
    );
}