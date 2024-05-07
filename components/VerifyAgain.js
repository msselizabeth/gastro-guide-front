"use client"
import { useState } from "react";
import styles from "../styles/VerifyAgain.module.scss";
import axios from "axios";

export const VerifyAgain = ({ textContent }) => {
     const [isFormVisible, setIsFormVisible] = useState(false);
     const [email, setEmail] = useState("");
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
    };

    const validateForm = () => {
       let isValid = true;
       if (!/^\S+@\S+\.\S+$/.test(email)) {
         setError(textContent.verify.errors.invalidEmail);
         isValid = false;
       }
       return isValid;
    };

    const handleSubmit = async (event) => {
       event.preventDefault();
       if (validateForm()) {
         try {
           await axios.post(
             `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`,
             {
               email,
             }
           );
           setIsSend(true);
           setError("");
           setReqErr("");
         } catch (error) {
           if (
             error.response &&
             error.response.status === 401 &&
             error.response.data.message === "Email not found"
           ) {
             setReqErr(textContent.verify.errors.notFound);
           }
            if (
              error.response &&
              error.response.status === 401 &&
              error.response.data.message === "Email has already verified"
            ) {
              setReqErr(textContent.verify.errors.inUse);
            }
           console.error(error);
         }
       }
     };
  return (
    <>
      {isSend ? (
        <h3 className={styles.verify__sent__text}>
          {textContent.verify.sendText}
        </h3>
      ) : (
        <>
          <div>
            <p className={styles.verify__text}>{textContent.verify.message}</p>
            <div className={styles.verify__btn__container}>
              <button
                type="button"
                onClick={handleButtonClick}
                className={styles.verify__btn}
              >
                {textContent.verify.btn}
              </button>
            </div>
          </div>
          {isFormVisible && (
            <>
              <form onSubmit={handleSubmit} className={styles.verify__form}>
                <label className={styles.verify__label}>
                  {textContent.verify.form.email}
                </label>
                <input
                  placeholder={textContent.verify.form.emailPlaceholder}
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  className={styles.verify__input}
                />
                {error && <p className={styles.verify__error}>{error}</p>}

                <div className={styles.verify__btn__container}>
                  <button type="submit" className={styles.verify__btn}>
                    {textContent.verify.form.btn}
                  </button>
                </div>
              </form>
              {reqErr && <p className={styles.verify__error}>{reqErr}</p>}
            </>
          )}
        </>
      )}
    </>
  );
};