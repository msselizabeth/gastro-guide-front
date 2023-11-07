import styles from "../styles/LoadMoreBtn.module.scss";

export const LoadMore = ({ onClick, textBtnMore }) => (
  <div className={styles.load__container}>
    <button onClick={onClick} type="button" className={styles.load__more}>
      {textBtnMore}
    </button>
  </div>
);