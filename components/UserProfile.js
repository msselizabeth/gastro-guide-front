"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/UserProfile.module.scss";
import { PortraitForm } from "./PortraitForm";
import { PersonalRecipes } from "./PersonalResipes";




export const UserProfile = ({
  title,
  exit,
  greatestMess,
  noAuthContent,
  recipesListTitle,
  recipesListDescription,
  notFoundRecipe,
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
        <section className="section">
          <div className="container">
            <h2 className="sectionTitle">{title}</h2>
            <div className={styles.name__container}>
              <p>
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

            <PersonalRecipes
              recipesListTitle={recipesListTitle}
              recipesListDescription={recipesListDescription}
              notFoundRecipe={notFoundRecipe}
            />
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container">
            <h2>{noAuthContent.needAuth}</h2>
            <Link href={"/authorization"}>{noAuthContent.needAuthLink}</Link>
            <h3>{noAuthContent.needRegistr}</h3>
            <Link href={"/registration"}>{noAuthContent.needRegistrLink}</Link>
          </div>
        </section>
      )}
    </>
  );
};
