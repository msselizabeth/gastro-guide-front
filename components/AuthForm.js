"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/AuthForm.module.scss";
import { NotHaveProfile } from "./NotHaveProfile";



export const AuthForm = ({textContent}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [error, setError] = useState("");
    
    const router = useRouter();

    useEffect(() => {
      checkAuthentication();
    }, [isAuthenticated]);

    const checkAuthentication = async () => {
      const response = await fetch(
        "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/current",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Получаем токен из локального хранилища
          },
        }
      );

        if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/login",
        { email, password }
      );
        const { user, token } = response.data;
        localStorage.setItem("authToken", token);
        setError("");
        setEmail("");
        setPassword("");
      setLoggedInUser(true);
     
    
    } catch (error) {
      if (error.response.status === 400) {
        setError(textContent.errors.verify);
      }
      if (error.response.status === 401) {
         setError(textContent.errors.auth);
       }
       console.error(error.response.data.message);
    }
  };

    const handleLogout = async () => {
        try {
            const authToken = localStorage.getItem("authToken");
            if (authToken) {
                // Отправляем запрос к серверу для выхода из системы с передачей токена
                await axios.post("https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/logout", null, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
            }

      // Удаляем токен из локального хранилища при выходе из системы
            localStorage.removeItem("authToken");

      setLoggedInUser(null);
    } catch (error) {
      console.error(
        "Ошибка при выходе из системы",
        error.response.data.message
      );
    }
    };
  

  return (
    <>
      {isAuthenticated ? (
        <h1>You have already login</h1>
      ) : (
        <div>
          {loggedInUser ? (
            <div>
              <p className={styles.loggedInText}>
                {textContent.loggedInText}
                <div
                  className={`${styles.login__btn__container} ${styles.auth__btn__container}`}
                >
                  <Link
                    href={"/user-profile"}
                    target="_blank"
                    className={`${styles.login__btn} ${styles.auth__btn}`}
                  >
                    {textContent.profileLink}
                  </Link>
                </div>
              </p>
            </div>
          ) : (
            <>
              <form className={styles.auth__form}>
                <label className={styles.auth__label}>
                  {textContent.form.email}:
                  <input
                    type="email"
                    placeholder={textContent.form.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.auth__input}
                  />
                </label>
                <label className={styles.auth__label}>
                  {textContent.form.password}:
                  <input
                    type="password"
                    placeholder={textContent.form.passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.auth__input}
                  />
                </label>
                <div className={styles.auth__btn__container}>
                  <button
                    type="button"
                    onClick={handleLogin}
                    className={styles.auth__btn}
                  >
                    {textContent.form.btn}
                  </button>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </form>
              <NotHaveProfile textContent={textContent} />
            </>
          )}
        </div>
      )}
    </>
  );
};

