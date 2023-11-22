"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/UserProfile.module.scss";
import { PortraitForm } from "./PortraitForm";
import { PersonalRecipes } from "./PersonalResipes";


export const UserProfile = ({
  exit,
  greatestMess,
  noAuthContent,
  portraitContent,
}) => {
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
           <>
            <div className={styles.name__container}>
              <p className={styles.name}>
                {greatestMess} {user.userName}!
              </p>
              <button
                type="button"
                onClick={handleLogout}
                className={styles.exit__btn}
              >
                {exit}
              </button>
            </div>

            <PortraitForm
              portrait={user.portrait}
              portraitContent={portraitContent}
            />

        </>
      ) : (
        <>
            <h2 className={styles.noAuth__title}>{noAuthContent.needAuth}</h2>
            <div className={styles.noAuth__btn__container}><Link href={"/authorization"} className={styles.noAuth__btn}>{noAuthContent.needAuthLink}</Link></div>
            <h2 className={styles.noAuth__title}>{noAuthContent.needRegistr}</h2>
            <div className={styles.noAuth__btn__container}><Link href={"/registration"} className={styles.noAuth__btn}>{noAuthContent.needRegistrLink}</Link></div>
        </>
      )}
    </>
  );
};
