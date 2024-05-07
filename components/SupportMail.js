"use client"
import axios from "axios";
import { useState } from "react";
import styles from "../styles/SupportMail.module.scss";

export const SupportMail = ({supportContent}) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [reqErr, setReqErr] = useState("");
    const [isSend, setIsSend] = useState(false);
    
    const handleButtonClick = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
            setEmail(value);
                break;
            case "message":
            setMessage(value);
        }

        setError("");
    }

    const validateForm = () => {
        let isValid = true;
         if (!/^\S+@\S+\.\S+$/.test(email)) {
          setError(supportContent.supportForm.emailErr);
          isValid = false;
         }
        return isValid;
    }

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
                try {
                  await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/help`,
                    {
                      email,
                      message,
                    }
                  );
                  setIsSend(true);
                  setError("");
                  setReqErr("");
                } catch (error) {
                  if (error.response && error.response.status === 400) {
                    setReqErr("Fields are empty");
                  }
                  console.error(error);
                }
         }

    };

    return (
      <>
        {isSend ? (
          <h3 className={styles.support__sent__text}>
            {supportContent.sendText}
          </h3>
        ) : (
          <>
            <div className={styles.support__text__container}>
              <p className={styles.support__text}>{supportContent.problem}</p>
              <div className={styles.support__btn__container}>
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className={styles.support__btn}
                >
                  {supportContent.supportForm.openBtn}
                </button>
              </div>
            </div>

            {isFormVisible && (
              <>
                <form onSubmit={handleSubmit} className={styles.support__form}>
                  <label className={styles.support__label}>
                    {supportContent.supportForm.email}
                  </label>
                  <input
                    placeholder={supportContent.supportForm.emailPlaceholder}
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    className={styles.support__input}
                  />
                  {error && <p className={styles.support__error}>{error}</p>}
                  <label className={styles.support__label}>
                    {supportContent.supportForm.message}
                  </label>
                  <textarea
                    className={`${styles.support__input} ${styles.support__input__message}`}
                    value={message}
                    type="text"
                    name="message"
                    required
                    onChange={handleChange}
                    placeholder={supportContent.supportForm.messagePlaceholder}
                  ></textarea>
                  <div className={styles.support__btn__container}>
                    <button type="submit" className={styles.support__btn}>
                      {supportContent.supportForm.sendBtn}
                    </button>
                  </div>
                </form>
                {reqErr && <p className={styles.support__error}>{reqErr}</p>}
              </>
            )}
          </>
        )}
      </>
    );
}