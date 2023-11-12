"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/UserProfile.module.scss";


export const UserProfile = ({ title, exit, greatestMess }) => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        try {
          const response = await axios.get(
            "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/current",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const userData = response.data;

          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchData();
    //  const token = localStorage.getItem("authToken");
    //  if (token) {
    //    setIsAuthenticated(true);

    //    const userData = axios.get("https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/current",
    //      {
    //        headers: {
    //          Authorization: `Bearer ${token}`, // Получаем токен из локального хранилища
    //        },
    //      });
    //    console.log(userData.data);
    //   //  setUser(userData);
    //  }
  }, [isAuthenticated, setIsAuthenticated]);

  const handleLogout = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        // Отправляем запрос к серверу для выхода из системы с передачей токена
        await axios.post(
          "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/auth/logout",
          null,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
      }
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Ошибка при выходе из системы", error.message);
    }

    router.push("/");
  };

  return (
    <>
      {isAuthenticated ? (
        <section className="section">
          <div className="container">
            <h1 className="sectionTitle">{title}</h1>
            <div className={styles.name__container}>
              <p>
                {greatestMess} {user.userName}!
              </p>
              <button type="button" onClick={handleLogout} className={styles.exit__btn}>
                {exit}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container">
            <h2>Вам необходимо авторизироваться!</h2>
            <Link href={"/authorization"}>Войти в свою запись?</Link>
            <h3>Нет учетной запси?</h3>
            <Link href={"/registration"}>Зарегистрироваться.</Link>
          </div>
        </section>
      )}
    </>
  );
};
