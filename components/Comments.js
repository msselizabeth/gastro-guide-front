"use client"

import { useEffect, useState } from "react";
import { NoOneComment } from "./NoOneComment";
import axios from "axios";
import { CommentsList } from "./CommentsList";
import { CommentNoAuth } from "./CommentNoAuth";
import { CommentForm } from "./CommentForm";
import { LoadMore } from "./LoadMoreBtn";
import styles from "../styles/CommentForm.module.scss";


export const Comments = ({ commentsContent, id}) => {
  const [isComments, setIsComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [auth, setAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(3);

  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/comments`,
        { text: message, recipe: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      setIsSent(!isSent);
    } catch (err) {
      console.error(err);
    }

    setMessage("");
  };


  useEffect(() => {
    getComments();
    isAuth();
  }, [currentPage, limit, isSent]);

  const loadMoreComments = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  async function getComments() {
    try {
      const response = await axios.get(
        `https://gastro-guide-cb84aa2b2322.herokuapp.com/api/comments/${id}?page=${currentPage}&limit=${limit}`
      );

      setComments((prevComments) => {
        const uniqueNewComments = response.data.sortedComments.filter(
          (newComment) =>
            !prevComments.some(
              (prevComment) => prevComment._id === newComment._id
            )
        );

        return [...prevComments, ...uniqueNewComments];
      });

      setTotalPages(response.data.totalPages);

      if (response.data.sortedComments.length >= 1) {
        setIsComments(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function isAuth() {
    try {
      const response = await axios.get(
        "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/current",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Получаем токен из локального хранилища
          },
        }
      );
      if (response) {
        setAuth(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{commentsContent.majorTitle}</h2>
        {!isComments ? (
          <NoOneComment content={commentsContent.noComments} />
        ) : (
          <>
            {comments && <CommentsList comments={comments} />}
            {currentPage < totalPages && (
              <LoadMore
                onClick={loadMoreComments}
                textBtnMore={commentsContent.loadMore}
              />
            )}
          </>
        )}
        {!auth ? (
          <CommentNoAuth commentsContent={commentsContent} />
        ) : (
          <form onSubmit={handleSubmit} className={styles.comment__form}>
            <label className={styles.comment__label}>
              {commentsContent.commentForm.message}
            </label>
            <textarea
              className={styles.comment__input}
              value={message}
              type="text"
              name="message"
              required
              onChange={handleChange}
              placeholder={commentsContent.commentForm.messPlaceholder}
            ></textarea>
            <div className={styles.comment__btn__container}>
              <button type="Submit" className={styles.comment__btn}>
                {commentsContent.commentForm.btn}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};