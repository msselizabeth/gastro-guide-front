import styles from "../styles/NoOneComment.module.scss";

export const NoOneComment = ({content}) => {

    return (
            <h3 className={styles.noComment}>{content}</h3>
    );
}