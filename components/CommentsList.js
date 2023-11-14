import moment from "moment";
import styles from "../styles/CommentsList.module.scss";

export const CommentsList = ({ comments }) => {

    return (
        <ul className={styles.comments__list}>{comments.map(comment => {
            return (
              <li key={comment._id} className={styles.comments__item}>
                <div className={styles.author__container}>
                  <h4 className={styles.comment__author}>
                    {comment.author.userName}
                  </h4>
                  <p className={styles.comment__time}>
                    {moment(comment.createdAt).format("DD-MM-YY HH:mm")}
                  </p>
                </div>
                <p className={styles.comments__text}>{comment.text}</p>
              </li>
            );
        })}</ul>
    )
}