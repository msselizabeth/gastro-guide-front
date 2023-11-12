import styles from "../styles/NotHaveProfile.module.scss";
import Link from "next/link";

export const NotHaveProfile = ({textContent}) => {

    return (
      <div>
        <p className={styles.notHaveProfile__addText}>
          {textContent.additionText.register}
        </p>
        <div className={styles.notHaveProfile__btn__container}>
          <Link href={"/registration"} className={styles.notHaveProfile__btn}>
            {textContent.additionText.btn}
          </Link>
        </div>
      </div>
    );
}