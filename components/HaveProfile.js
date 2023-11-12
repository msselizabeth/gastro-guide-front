import styles from "../styles/HaveProfile.module.scss";
import Link from "next/link";

export const HaveProfile = ({textContent}) => {
    return (
      <div>
        <p className={styles.haveProfile__text}>
          {textContent.additionText.register}
        </p>
        <div className={styles.haveProfile__btn__container}>
          <Link href={"/authorization"} className={styles.haveProfile__btn}>
            {textContent.additionText.btn}
          </Link>
        </div>
      </div>
    );
}