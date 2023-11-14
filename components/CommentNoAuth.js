import Link from "next/link";
import styles from "../styles/CommentNoAuth.module.scss";

export const CommentNoAuth = ({commentsContent}) => {
  return (
    <>
      <h4 className={styles.noAuth__message}>
        {commentsContent.noAuth.message}
      </h4>
      <div className={styles.noAuth__links__container}>
        <div className={styles.noAuth__link__container}>
          <Link href={"/authorization"} className={styles.noAuth__link}>
            {commentsContent.noAuth.authLink}
          </Link>
        </div>
        <div className={styles.noAuth__link__container}>
          <Link href={"/registration"} className={styles.noAuth__link}>
            {commentsContent.noAuth.registerLink}
          </Link>
        </div>
      </div>
    </>
  );
};
